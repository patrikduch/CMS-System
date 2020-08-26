import IDashboardDto from "../../../typescript/interfaces/dto/stats/IDashboard-Stats-Dto";

/* Article count private field. */
const _articleCount = new WeakMap();

/* Gallery items total count. */
const _galleryItemsCount = new WeakMap();

/* Modules total count private field. */
const _moduleCount = new WeakMap();

/* Enabled modules count private field. */
const _enabledModulesCount = new WeakMap();

/* Total features count private field. */
const _totalFeaturesCount = new WeakMap();

/* Enabled features count private field. */
const _enabledFeaturesCount = new WeakMap();

/**
 * @class DashboardDto => Data transfer object to fetch all dashboard statistics.
 */
class DashboardDto implements IDashboardDto {
  getTotalArticleCount: () => number;
  setTotalArticleCount: (articleCount: number) => void;

  getTotalModuleCount: () => number;
  setTotalModuleCount: (moduleCount: number) => void;

  getEnabledModulesCount: () => number;
  setEnabledModulesCount: (enabledModulesCount: number) => void;

  getTotalFeaturesCount: () => number;
  setTotalFeaturesCount: (totalFeaturesCount: number) => void;

  getTotalEnabledFeaturesCount: () => number;
  setTotalEnabledFeaturesCount: (enabledFeaturesCount: number) => void;

  getTotalGalleryPhotosCount: () => number;
  setTotalGalleryPhotosCount: (totalPhotosCount: number) => void;

  constructor() {
    this.getTotalArticleCount = () => {
      return _articleCount.get(this);
    };

    this.setTotalArticleCount = (articleCount: number) => {
      _articleCount.set(this, articleCount);
    };

    this.getTotalModuleCount = () => {
      return _moduleCount.get(this);
    };
    this.setTotalModuleCount = (moduleCount: number) => {
      _moduleCount.set(this, moduleCount);
    };

    this.getEnabledModulesCount = () => {
      return _enabledModulesCount.get(this);
    };

    this.setEnabledModulesCount = (enabledModulesCount: number) => {
      _enabledModulesCount.set(this, enabledModulesCount);
    };

    this.getTotalFeaturesCount = () => {
      return _totalFeaturesCount.get(this);
    };

    this.setTotalFeaturesCount = (totalFeaturesCount: number) => {
      _totalFeaturesCount.set(this, totalFeaturesCount);
    };

    this.getTotalEnabledFeaturesCount = () => {
      return _enabledFeaturesCount.get(this);
    };

    this.setTotalEnabledFeaturesCount = (enabledFeaturesCount: number) => {
      _enabledFeaturesCount.set(this, enabledFeaturesCount);
    };

    this.getTotalGalleryPhotosCount = () => {
      return _galleryItemsCount.get(this);
    };

    this.setTotalGalleryPhotosCount = (totalPhotosCount: number) => {
      _galleryItemsCount.set(this, totalPhotosCount);
    };
  }
}

export default DashboardDto;
