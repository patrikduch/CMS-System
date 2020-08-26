import IDashboardDto from "../dto/stats/IDashboard-Stats-Dto";
import IArticleStatsDto from "../dto/stats/IArticle-Stats-Dto";

export default interface IStatsFasade {
  getArticleStats(): Promise<IArticleStatsDto>;
  getDashboardStats(): Promise<IDashboardDto>;
}
