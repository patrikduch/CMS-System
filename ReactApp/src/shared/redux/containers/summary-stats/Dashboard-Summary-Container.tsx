import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

/* 
  All redux actions that will be sent from container to the specific component.
*/
import * as summaryStatsActions from "../../../redux/actions/summary-stats/summary-stats-actions";

/*
  Component where state and actions are passed.
*/
import DashboardSummary from "../../../connected-components/summary-stats/Dashboard-Summary";

/* Reselect selectors.  */
import {
  getArticleStats,
  getFeatureStats,
  getGalleryStats,
  getModuleStats,
} from "../../selectors/summary-stats/summary-stats-selectors";


/**
 * @interface IState => Container`s state interface.
 */
interface IState {
  summaryStats: {
    articles: {
      totalCount: number;
    };

    features: {
      totalCount: number;
      enabledCount: number;
    };

    modules: {
      totalCount: number;
      enabledCount: number;
    };

    gallerySystem: {
      photos: {
        totalCount: number;
      };
    };
  };
}

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state => State passed into props.
 */
const mapStateToProps = (state: IState) => {
  return {
    articles: getArticleStats(state.summaryStats.articles),
    modules: getModuleStats(state.summaryStats.modules),
    features: getFeatureStats(state.summaryStats.features),
    gallerySystem: getGalleryStats(state.summaryStats.gallerySystem),
  };
};

/**
 * @function mapDispatchToProps => Mapping actions to the specific component.
 * @param dispatch => Dispatch method for triggering incoming Redux store manipulation.
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(summaryStatsActions, dispatch),
  };
};

/**
 * Creation of Redux connected component for displaying summary stats of admin dashboard.
 */
const DashboardSummaryContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardSummary);

export default DashboardSummaryContainer;