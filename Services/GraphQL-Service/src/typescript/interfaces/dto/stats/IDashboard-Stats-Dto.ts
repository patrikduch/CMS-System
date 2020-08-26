/**
 * @interface IDashboardDto => Contract for dashboard stats data transfer object.
 */
interface IDashboardDto {
  /**
   * @function getTotalArticleCount => Getter to fetch article total count property.
   */
  getTotalArticleCount(): number;
  /**
   * @function setTotalArticleCount => Setter to change article total count property.
   */
  setTotalArticleCount: (articleCount: number) => void;

  /**
   * @function getTotalModuleCount => Getter for fetching total count of modules.
   */
  getTotalModuleCount(): number;

  /**
   * @function setTotalModuleCount => Setter to change module count property.
   */
  setTotalModuleCount: (moduleCount: number) => void;

  /**
   * @function getEnabledModulesCount => Getter for fetching currently enabled modules.
   */
  getEnabledModulesCount: () => number;

  /**
   * @function setEnabledModulesCount => Setter for currently enabled modules.
   */
  setEnabledModulesCount: (enabledModulesCount: number) => void;

  /**
   *  @function getTotalFeaturesCount => Getter for fetching total number of features.
   */
  getTotalFeaturesCount: () => number;

  /**
   * @function setTotalArticleCount => Setter for total number of features.
   */
  setTotalFeaturesCount: (featuresCount: number) => void;

  /**
   * @function getTotalEnabledFeaturesCount => Getter for fetching count of enabled features.
   */
  getTotalEnabledFeaturesCount: () => number;

  /**
   * @function setTotalEnabledFeaturesCount => Setter for count of enabled features.
   */
  setTotalEnabledFeaturesCount: (enabledFeaturesCount: number) => void;

  /**
   *  @function getTotalGalleryPhotosCount=> Getter for fetching total number of gallery photos.
   */
  getTotalGalleryPhotosCount: () => number;

  /**
   *  @function setTotalGalleryPhotosCount => Getter for fetching total number of gallery photos.
   */
  setTotalGalleryPhotosCount: (totalPhotosCount: number) => void;
}

export default IDashboardDto;
