import { injectable, inject } from "inversify";
import { TYPES } from "../../ioc/types";
import IArticleFasade from "../../typescript/interfaces/fasades/IArticle-Fasade";
import IUnitOfWork from "../../typescript/interfaces/uow/IUnitOfWork";

/* Required models. */
import ArticleModel from "../../models/article-system/Article";

/* Dtos */
import ArticleContentDto from "../../dto/models/articles/Article-Content-Dto";

@injectable()
export default class ArticleFasade implements IArticleFasade {
  private _uow!: IUnitOfWork;

  constructor(
    @inject(TYPES.IUnitOfWork)
    private uow: IUnitOfWork
  ) {
    /* Save unit of work instance */
    this._uow = uow;
  }

  /**
   * @function getAllArticles => Fetch all articles without restrictions.
   */
  async getAllArticles(): Promise<ArticleContentDto | null> {
    return await this._uow.getRepository(ArticleModel).findAll();
  }

  /*
 	Get single article by its identifier. 
  */
  async getArticle(id: number): Promise<ArticleContentDto | null> {
    /* Get entity from database represented via Model */
    const entity = await this._uow.getRepository(ArticleModel).findById(id);

    if (entity == null) return null;

    /*  Creation of article content data transfer object. */
    const articleContentDto = new ArticleContentDto(
      id,
      entity.content,
      entity.title
    );

    articleContentDto.setArticleCreation(entity.createdAt);

    /* Returns article`s content data transfer object. */
    return articleContentDto;
  }

  /**
   * @function getLatestArticles =>
   * @param limit
   */
  async getLatestArticles(limit: number): Promise<ArticleContentDto[] | null> {
    const articleRep = this.uow.getRepository(ArticleModel);

    const resultList: ArticleContentDto[] = [];

    // 1. Fetch articles from database
    const fetchedList: [] = await articleRep.findLatest(limit);

    // 2. Creation of result

    fetchedList.forEach(
      (article: { id: number; content: string; title: string }) => {
        const test = article;

        const articleItem = new ArticleContentDto(
          article.id,
          article.content,
          article.title
        );

        resultList.push(articleItem);
      }
    );

    return resultList;
  }

  /**
   * @function getPagedArticles => Fetch articles for specified page identifier.
   * @param pageId
   * @param pageSize
   */
  async getPagedArticles(
    pageId: number,
    pageSize: number
  ): Promise<ArticleContentDto | null> {
    return await this._uow
      .getRepository(ArticleModel)
      .getPaged(pageId, pageSize, {
        order: [["id", "DESC"]],
      });
  }

  /**
   * @function addArticle - creation of new article entry.
   * @param data => New data that to be inserted into database.
   */
  async addArticle(data: any): Promise<void | null> {
    const rep = this._uow.getRepository(ArticleModel);

    const currentModel = rep.getCurrentModel();

    /* Create local instance */
    const res = currentModel.build({
      title: data.title,
      content: data.content,
      articleCategoryId: data.articleCategoryId,
    });

    /* Add repository into tracking state. */
    this.uow.trackRepository(res);

    /* Save changes to the database */
    this._uow.saveChanges();
  }

  /**
   * @function updateArticle => Update article by its identififer.
   * @param id  => Numeric identifier of article item.
   * @param data => New data that updates existing article item.
   */
  async updateArticle(
    id: number,
    data: any
  ): Promise<ArticleContentDto | null> {
    const entity = await this._uow.getRepository(ArticleModel).findById(id);

    // Entity cannot be found
    if (entity == null) {
      return null;
    }

    entity.content = data.content;
    entity.title = data.title;

    this.uow.trackRepository(entity);

    /* Save changes to the database */
    this._uow.saveChanges();

    const articleContentDto = new ArticleContentDto(
      id,
      entity.content,
      entity.title
    );

    return articleContentDto;
  }

  /**
   * @function removeArticle => Remove article by its identifier.
   * @param id => numeric identifier of article item.
   */
  async removeArticle(id: number): Promise<void | null> {
    const entity = await this._uow.getRepository(ArticleModel).findById(id);

    /* Entity cannot be found */
    if (entity == null) {
      return null;
    }

    await ArticleModel.destroy({
      where: {
        id,
      },
    });
  }
}
