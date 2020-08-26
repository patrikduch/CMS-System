import ArticleContentDto from "../../../dto/models/articles/Article-Content-Dto";

export default interface IArticleFasade {
  getAllArticles(): Promise<ArticleContentDto | null>;
  getArticle(id: number): Promise<ArticleContentDto | null>;
  getPagedArticles(
    pageId: number,
    pageSize: number
  ): Promise<ArticleContentDto | null>;
  getLatestArticles(limit: number): Promise<ArticleContentDto[] | null>;
  addArticle(data: any): Promise<void | null>;
  updateArticle(id: number, data: any): Promise<ArticleContentDto | null>;
  removeArticle(id: number): Promise<void | null>;
}
