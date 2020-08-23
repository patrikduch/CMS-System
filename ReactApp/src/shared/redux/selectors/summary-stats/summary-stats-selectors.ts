import { createSelector } from "reselect";

const articleStatsState = (state: { totalCount: number }) => state;

const moduleStatsState = (state: {
  totalCount: number;
  enabledCount: number;
}) => state;

const featureStatsState = (state: {
  totalCount: number;
  enabledCount: number;
}) => state;

const galleryStatsState = (state: {
  photos: {
    totalCount: number;
  };
}) => state;

/**
 * @function getArticleStats => Cached article statistics review.
 */
const getArticleStats = createSelector([articleStatsState], (a) => {
  return {
    totalCount: a.totalCount,
  };
});

/**
 * @function getModuleStats => Cached module statistics review.
 */
const getModuleStats = createSelector([moduleStatsState], (a) => {
  return {
    totalCount: a.totalCount,
    enabledCount: a.enabledCount,
  };
});

/**
 * @function getFeatureStats => Cached feature statistics review.
 */
const getFeatureStats = createSelector([featureStatsState], (a) => {
  return {
    totalCount: a.totalCount,
    enabledCount: a.enabledCount,
  };
});

/**
 * @function getGalleryStats => Cached gallery-system statistics review.
 */
const getGalleryStats = createSelector([galleryStatsState], (g) => {
  return {
    photos: {
      totalCount: g.photos.totalCount,
    },
  };
});

export { getArticleStats, getFeatureStats, getGalleryStats, getModuleStats };
