import { injectable, inject } from "inversify";
import { TYPES } from "../../ioc/types";
/* Required models */
import ArticleModel from "../../models/article-system/Article";
import GalleryItemModel from "../../models/gallery-system/Gallery-Item";

/* Type checking. */
import IDashboardDto from "../../typescript/interfaces/dto/stats/IDashboard-Stats-Dto";
import IStatsFasade from "../../typescript/interfaces/fasades/IStats-Fasade";
import IUnitOfWork from "../../typescript/interfaces/uow/IUnitOfWork";
/* Dtos. */
import DashboardDto from "../../dto/models/stats/Dashboard-Dto";
import ModuleFeature from "../../models/module-system/Module-Feature";
import IArticleStatsDto from "../../typescript/interfaces/dto/stats/IArticle-Stats-Dto";
import ArticleStatsDto from "../../dto/models/stats/Article-Stats-Dto";

@injectable()
export default class StatsFasade implements IStatsFasade {
  private _uow!: IUnitOfWork;

  constructor(
    @inject(TYPES.IUnitOfWork)
    private uow: IUnitOfWork
  ) {
    /* Save unit of work instance */
    this._uow = uow;
  }

  /**
   * @function getArticleStats => Fetch only article statistics.
   */
  async getArticleStats(): Promise<IArticleStatsDto> {
    /* Fetch article count. */
    const articleCount = await this._uow.getRepository(ArticleModel).count();

    /* Creation of result. */
    const result = new ArticleStatsDto() as IArticleStatsDto;
    result.setArticlesSummaryCount(articleCount);

    return result;
  }

  /**
   * @function getDashboardStats => Fetching administration dashboard statistics.
   */
  async getDashboardStats(): Promise<IDashboardDto> {
    /* Total articles count. */
    const articleCount = await this._uow.getRepository(ArticleModel).count();

    /* Total modules count. */
    const moduleSummaryCount = await this._uow
      .getRepository(ModuleFeature)
      .count({
        where: {
          isFeature: false,
        },
      });

    /* Enabled module`s count. */

    const enabledModulesCount = await this._uow
      .getRepository(ModuleFeature)
      .count({
        where: {
          isEnabled: true,
          isFeature: false,
        },
      });

    /* Total features count. */

    const totalFeaturesCount = await this._uow
      .getRepository(ModuleFeature)
      .count({
        where: {
          isFeature: true,
        },
      });

    /* Enabled features count. */
    const enabledFeaturesCount = await this._uow
      .getRepository(ModuleFeature)
      .count({
        where: {
          isFeature: true,
          isEnabled: true,
        },
      });

    /* Total articles count. */
    const galleryTotalCount = await this._uow
      .getRepository(GalleryItemModel)
      .count();

    /* Creation of result. */
    const result = new DashboardDto() as IDashboardDto;
    result.setTotalArticleCount(articleCount);
    result.setTotalModuleCount(moduleSummaryCount);
    result.setEnabledModulesCount(enabledModulesCount);
    result.setTotalFeaturesCount(totalFeaturesCount);
    result.setTotalEnabledFeaturesCount(enabledFeaturesCount);
    result.setTotalGalleryPhotosCount(galleryTotalCount);

    return result;
  }
}
