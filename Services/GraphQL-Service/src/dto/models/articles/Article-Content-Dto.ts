import IArticleContentDto from "../../../typescript/interfaces/dto/article-system/IArticle-Content-Dto";

/* Article identifier private field. */
const _articleId = new WeakMap();

/* Article title private field. */
const _articleTitle = new WeakMap();

/* Article content private field. */
const _articleContent = new WeakMap();

/* Article creation private field. */
const _articleCreation = new WeakMap();

/*
  Dto for handling (displaying) article content
*/
export default class ArticleContentDto implements IArticleContentDto {
  getArticleContent: () => string;
  setArticleContent: (articleContent: string) => void;

  getArticleId: () => number;
  setArticleId: (articleId: number) => void;

  getArticleTitle: () => string;
  setArticleTitle: (articleTitle: string) => void;

  getArticleCreation: () => string;
  setArticleCreation: (articleCreation: string) => void;

  constructor(articleId: number, articleContent: string, articleTitle: string) {
    this.getArticleId = () => {
      return _articleId.get(this);
    };

    this.setArticleId = (articleId) => {
      _articleId.set(this, articleId);
    };

    this.getArticleTitle = () => {
      return _articleTitle.get(this);
    };

    this.setArticleTitle = (articleTitle: string) => {
      _articleTitle.set(this, articleTitle);
    };

    this.getArticleContent = () => {
      return _articleContent.get(this);
    };

    this.setArticleContent = (articleContent: string) => {
      _articleContent.set(this, articleContent);
    };

    this.getArticleCreation = () => {
      return _articleCreation.get(this);
    };

    this.setArticleCreation = (articleCreation: string) => {
      _articleCreation.set(this, articleCreation);
    };

    // ===  Initialization ===============================

    this.setArticleContent(articleContent);
    this.setArticleId(articleId);
    this.setArticleTitle(articleTitle);
  }
}
