/* Type checking. */
import INewsletterFasade from "../../typescript/interfaces/fasades/INewsletter-Fasade";
import IUnitOfWork from "../../typescript/interfaces/uow/IUnitOfWork";

/* IoC imports. */
import { TYPES } from "../../ioc/types";
import { inject, injectable } from "inversify";

/* Models */
import NewsletterSubscriberModel from "../../models/newsletter/Newsletter-Subscriber";
import NewsletterSubscriberDto from "../../dto/models/newsletter/Newsletter-Subscriber-Dto";
import INewsletterSubscriberDto from "../../typescript/interfaces/dto/newsletter/INewsletter-Subscriber-Dto";
import EmailService from "../../services/e-mails/Email-Service";
import CronService from "../../services/cron/Cron-Service";
import IProjectDetailFasade from "../../typescript/interfaces/fasades/IProject-Detail-Fasade";
import IEmailGeneratorService from "../../typescript/interfaces/services/IEmail-Generator-Service";

/* Model imports. */
import ArticleModel from "../../models/article-system/Article";
import IArticleFasade from "../../typescript/interfaces/fasades/IArticle-Fasade";

@injectable()
class NewsletterFasade implements INewsletterFasade {
  private _articleFasade!: IArticleFasade;
  private _emailGeneratorService!: IEmailGeneratorService;
  private _projectDetailFasade!: IProjectDetailFasade;
  private _uow!: IUnitOfWork;

  constructor(
    @inject(TYPES.IArticleFasade)
    articleFasade: IArticleFasade,
    @inject(TYPES.IEmailGeneratorService)
    emailGeneratorService: IEmailGeneratorService,
    @inject(TYPES.IProjectDetailFasade)
    projectDetailFasade: IProjectDetailFasade,
    @inject(TYPES.IUnitOfWork)
    uow: IUnitOfWork
  ) {
    this._articleFasade = articleFasade;
    this._emailGeneratorService = emailGeneratorService;
    this._projectDetailFasade = projectDetailFasade;
    this._uow = uow;
  }

  /**
   * @function addSubscriber => Store new subscriber
   * @param email
   */
  async addSubscriber(email: string): Promise<INewsletterSubscriberDto> {
    const rep = this._uow.getRepository(NewsletterSubscriberModel);

    /* Check for entity duplicity. */

    const entity = await rep.findFirst({
      where: {
        email,
      },
    });

    /* Creation of data transfer object. */
    const result = new NewsletterSubscriberDto(email);

    if (entity != null) {
      /* This e-mail is already subscribed. */
      result.setHasError(true);
      return result;
    }

    /* Create local instance */
    const res = rep.getCurrentModel().build({
      email,
    });

    /* Add repository into tracking state. */
    this._uow.trackRepository(res);

    /* Save changes to the database */
    this._uow.saveChanges();

    return result;
  }

  /**
   * @function sendSubscription => Send subscription to all subsribed users.
   */
  async sendSubscription(): Promise<void> {
    const newsletterRep = this._uow.getRepository(NewsletterSubscriberModel);

    /* Get project details */
    const projectDetail = await this._projectDetailFasade.getProjectDetail();
    /* Basic e-mail setup. */
    const curentDate = new Date();
    const sender = "duchpatrik@icloud.com";
    const subject = `Newsletter ${
      curentDate.getMonth() + 2
    }/${curentDate.getFullYear()}`;

    /* Get list of recent articles. */
    const articles = await this._articleFasade.getLatestArticles(5);

    /* Html generation based on fetched data and provided html template. */
    const html = await this._emailGeneratorService.generateNewsletterEmail({
      companyName: projectDetail.getCompanyName(),
      projectName: projectDetail.getProjectName(),
      projectUrl: projectDetail.getDomainUrl(),
      senderEmail: sender,
      subject,
      articles: articles,
    });

    /* Get list of subscrivers from dataabase. */
    const subscriberList: [] = await newsletterRep.findAll();

    /* Schedule task that are performed after some time. */

    CronService.runTask(() => {
      /* Send e-mail to all s */
      subscriberList.forEach((subscriber: { email: string }) => {
        const obj = {
          recipient: subscriber.email,
          sender,
          subject,
          html,
        };

        EmailService.sendEmail(obj);
      });
    });
  }
}

export default NewsletterFasade;
