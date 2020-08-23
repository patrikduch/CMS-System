import { connect, ConnectedComponent } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

/* Redux actions to dispatch. */
import * as articlesSystemActions from "../../actions/articles/articles-actions";
import * as featureSystemActions from "../../actions/features/features-system-actions";
import * as gallerySystemActions from "../../actions/gallery-system/gallery-system-actions";
import * as moduleSystemActions from "../../actions/module-system/module-system-actions";
import * as projectDetailActions from "../../actions/project-detail/project-detail-actions";
import * as ownerInfoActions from "../../actions/owner-info/owner-info-actions";
import * as socialIconsActions from "../../actions/social-icons/social-icons-actions";
import { fetchArticle } from "../../actions/articles/articles-actions";

/* Components to connect. */
import ArticleContentPageSync from "../../../connected-components/module-system/Article-Content-Page/Article-Content-Page-Sync";
import ArticlesPageSync from "../../../connected-components/module-system/Articles-Page/Articles-Page-Sync";
import GalleryPageSync from "../../../connected-components/module-system/Gallery-Page/Gallery-Page-Sync";
import LandingPageSync from "../../../connected-components/module-system/Landing-Page/Landing-Page-Sync";

/* Type checking. */
import ArticleContentSyncPageProps from "../../../../typescript/types/shared/connected-components/module-system/Article-Content-Page/Article-Content-Page-Sync-Props";
import GalleryPageSyncProps from "../../../../typescript/types/shared/connected-components/module-system/Gallery-Page/Gallery-Page-Sync-Props";
import LandingPageSyncProps from "../../../../typescript/types/shared/connected-components/module-system/Landing-Page/Landing-Page-Sync-Props";
import ModuleSystemSyncProps from "../../../../typescript/types/shared/connected-components/module-system/Module-System-Sync-Props";
import ErrorPageSync from "../../../connected-components/module-system/Error-Page/Error-Page-Sync";
import ErrorPageSyncProps from "../../../../typescript/types/shared/connected-components/module-system/Error-Page/Error-Page-Sync-Props";

const articleContentDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchArticle: bindActionCreators(fetchArticle, dispatch),
    featureSystemActions: bindActionCreators(featureSystemActions, dispatch),
    moduleSystemActions: bindActionCreators(moduleSystemActions, dispatch),
    projectDetailActions: bindActionCreators(projectDetailActions, dispatch),
    ownerInfoActions: bindActionCreators(ownerInfoActions, dispatch),
    socialIconsActions: bindActionCreators(socialIconsActions, dispatch),
  };
};

const articlesPageDispatchToProps = (dispatch: Dispatch) => {
  return {
    articlesSystemActions: bindActionCreators(articlesSystemActions, dispatch),
    moduleSystemActions: bindActionCreators(moduleSystemActions, dispatch),
    projectDetailActions: bindActionCreators(projectDetailActions, dispatch),
    ownerInfoActions: bindActionCreators(ownerInfoActions, dispatch),
    featureSystemActions: bindActionCreators(featureSystemActions, dispatch),
    socialIconsActions: bindActionCreators(socialIconsActions, dispatch),
  };
};

const landingPageDispatchToProps = (dispatch: Dispatch) => {
  return {
    articlesSystemActions: bindActionCreators(articlesSystemActions, dispatch),
    moduleSystemActions: bindActionCreators(moduleSystemActions, dispatch),
    projectDetailActions: bindActionCreators(projectDetailActions, dispatch),
    ownerInfoActions: bindActionCreators(ownerInfoActions, dispatch),
    featureSystemActions: bindActionCreators(featureSystemActions, dispatch),
    socialIconsActions: bindActionCreators(socialIconsActions, dispatch),
  };
};

const galleryPageDispatchToProps = (dispatch: Dispatch) => {
  return {
    featureSystemActions: bindActionCreators(featureSystemActions, dispatch),
    gallerySystemAction: bindActionCreators(gallerySystemActions, dispatch),
    moduleSystemActions: bindActionCreators(moduleSystemActions, dispatch),
    projectDetailActions: bindActionCreators(projectDetailActions, dispatch),
    ownerInfoActions: bindActionCreators(ownerInfoActions, dispatch),
    socialIconsActions: bindActionCreators(socialIconsActions, dispatch),
  };
};

const errorPageDispatchToProps = (dispatch: Dispatch) => {
  return {
    featureSystemActions: bindActionCreators(featureSystemActions, dispatch),
    moduleSystemActions: bindActionCreators(moduleSystemActions, dispatch),
    projectDetailActions: bindActionCreators(projectDetailActions, dispatch),
    ownerInfoActions: bindActionCreators(ownerInfoActions, dispatch),
  };
};

const LandingPageContainerSync = connect(
  null,
  landingPageDispatchToProps
)(
  LandingPageSync as ConnectedComponent<
    React.FC<ModuleSystemSyncProps>,
    Pick<LandingPageSyncProps, "isEnabled" | "children">
  >
);

const ArticleContentContainerSync = connect(
  null,
  articleContentDispatchToProps
)(
  ArticleContentPageSync as ConnectedComponent<
    React.FC<ArticleContentSyncPageProps>,
    Pick<ArticleContentSyncPageProps, "item" | "isEnabled" | "children">
  >
);

const ArticlesContainerSync = connect(
  null,
  articlesPageDispatchToProps
)(ArticlesPageSync);

const GalleryPageSyncContainer = connect(
  null,
  galleryPageDispatchToProps
)(
  GalleryPageSync as ConnectedComponent<
    React.FC<GalleryPageSyncProps>,
    Pick<GalleryPageSyncProps,  "item" | "isEnabled" | "children">
  >
);

const ErrorPageSyncContainer = connect(
  null,
  errorPageDispatchToProps
)(
  ErrorPageSync as ConnectedComponent<
    React.FC<ErrorPageSyncProps>,
    Pick<ErrorPageSyncProps, "isEnabled" | "children">
  >
);

export {
  ArticlesContainerSync,
  ArticleContentContainerSync,
  ErrorPageSyncContainer,
  GalleryPageSyncContainer,
  LandingPageContainerSync,
};
