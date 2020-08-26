import ArticleContentDto from "../../../dto/models/articles/Article-Content-Dto";

/**
 * @type emailDataTypeProps => Type anotation for generation newsletter e-mails.
 */
type NewsletterDataTypeProps = {
  projectUrl: string;
  projectName: string;
  senderEmail: string;
  companyName: string;
  subject: string;
  articles: ArticleContentDto[] | null;
};

export default NewsletterDataTypeProps;
