import IArticleStatsDto from "../../../typescript/interfaces/dto/stats/IArticle-Stats-Dto";

/* Article count private field. */
const _articleCount = new WeakMap();

/**
 * @class ArticlesStatsDto => Data transfer object to fetch statistics about article-system.
 */
class ArticleStatsDto implements IArticleStatsDto {
  getArticlesSummaryCount: () => number;
  setArticlesSummaryCount: (articleCount: number) => void;

  constructor() {
    this.getArticlesSummaryCount = () => {
      return _articleCount.get(this);
    };

    this.setArticlesSummaryCount = (articleCount: number) => {
      _articleCount.set(this, articleCount);
    };
  }
}

export default ArticleStatsDto;
