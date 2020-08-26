/**
 * @interface IArticleStatsDto => Contract for article`s statistics data transfer object.
 */
interface IArticleStatsDto {
  getArticlesSummaryCount: () => number;
  setArticlesSummaryCount: (articleCount: number) => void;
}

export default IArticleStatsDto;
