import { combineReducers } from "redux";
import projectDetailReducer from "../reducers/project-detail/project-detail-reducer";
import moduleSystemReducer from "./module-system/module-system-reducer";
import adminloginReducer from "../reducers/admin/admin-login/admin-login-reducer";
import articleReducer from "../reducers/articles/articles-reducer";
import ownerInfoReducer from "../reducers/owner-info/owner-info-reducer";
import featureReducer from "../reducers/features/features-reducer";
import socialIconsReducer from "../reducers/social-icons/social-icons-reducer";
import summaryStatsReducer from "../reducers/summary-stats/summary-stats-reducer";
import gallerySystemReducer from "./gallery-system/gallery-system-reducer";

/* Merging reducers into one */

const rootReducer = combineReducers({
  adminlogin: adminloginReducer,
  articleSystem: articleReducer,
  featureSystem: featureReducer,
  gallerySystem: gallerySystemReducer,
  moduleSystem: moduleSystemReducer,
  projectDetail: projectDetailReducer,
  socialIconsReducer: socialIconsReducer,
  summaryStats: summaryStatsReducer,
  ownerInfo: ownerInfoReducer,
});

export default rootReducer;
