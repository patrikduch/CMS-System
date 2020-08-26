/**
 * @interface IArticleContentDto => contact for ArticleContent data transfer object.
 */
interface IArticleContentDto {
  getArticleId: () => number;
  setArticleId: (articleId: number) => void;
  getArticleTitle: () => string;
  setArticleTitle: (articleTitle: string) => void;
  getArticleContent: () => string;
  setArticleContent: (articleContent: string) => void;
  getArticleCreation: () => string;
  setArticleCreation: (articleCreation: string) => void;
}

export default IArticleContentDto;
