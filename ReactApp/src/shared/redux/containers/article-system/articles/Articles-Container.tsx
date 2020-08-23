import { connect, ConnectedComponent } from "react-redux";
import { withRouter } from "react-router";
import Articles from "../../../../components/client-app/articles/list/Article-List";
import ArticlesListAdmin from "../../../../components/admin-app/content/article-system/article/read/Article-List";
import TopArticles from "../../../../connected-components/article-system/articles/Top-Articles";

/* Actions */
import * as articleActions from "../../../actions/articles/articles-actions";

import { bindActionCreators, Dispatch } from "redux";

/**
 * @function mapDispatchToProps => Mapping actions to the specific component.
 * @param dispatch
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(articleActions, dispatch),
  };
};

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state => State passed into props.
 */
const mapStateToProps = (state: {
  articleSystem: { articles: { content: []; totalCount: number } };
}) => {
  return {
    articles: state.articleSystem.articles.content,
    pageCount: state.articleSystem.articles.totalCount,
  };
};

const TopArticlesProps = {
  mapDispatchToProps: (dispatch: Dispatch) => {
    return {
      actions: bindActionCreators(articleActions, dispatch),
    };
  },

  mapStateToProps: (state: {
    articleSystem: { articles: { content: []; totalCount: number } };
  }) => {
    return {
      articles: state.articleSystem.articles.content,
    };
  },
};

const TopArticlesContainer = connect(
  TopArticlesProps.mapStateToProps,
  TopArticlesProps.mapDispatchToProps
)(TopArticles as ConnectedComponent<React.FC<{}>, Pick<{}, never>>);

const ArticlesContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Articles)
);

const ArticlesAdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesListAdmin);

export { ArticlesContainer, ArticlesAdminContainer, TopArticlesContainer };
