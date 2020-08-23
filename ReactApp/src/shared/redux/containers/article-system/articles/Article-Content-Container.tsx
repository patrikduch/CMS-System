import { connect, ConnectedComponent } from "react-redux";
import { withRouter } from "react-router";
import ArticleContent from "../../../../components/client-app/articles/content/Article-Content";

/* Actions. */
import * as articleActions from "../../../actions/articles/articles-actions";
import { bindActionCreators, Dispatch } from "redux";
import ArticleEdit from "../../../../connected-components/article-system/articles/crud/Article-Edit";
import ArticleEditProps from "../../../../../typescript/types/shared/connected-components/article-system/articles/crud/Article-Edit-Props";

/* mapping actions to the specific component. */
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(articleActions, dispatch),
  };
};

/* mapping state from reducer to the  specific component */
const mapStateToProps = (state: {
  articleSystem: {
    articles: { content: []; totalCount: number };
    currentArticle: {
      id: number;
      title: string;
      content: string;
      createdAt: string;
    };
  };
}) => {
  return {
    article: state.articleSystem.currentArticle,
    pageId:
      state.articleSystem.currentArticle != null
        ? state.articleSystem.currentArticle.id
        : null,
  };
};

const articleEditContentProps = {
  mapDispatchToProps: (dispatch: Dispatch) => {
    return {
      fetchPagedArticles: bindActionCreators(
        articleActions.fetchPagedArticles,
        dispatch
      ),
      updateArticle: bindActionCreators(articleActions.updateArticle, dispatch),
    };
  },

  mapStateToProps: (state: {
    articleSystem: {
      articles: { content: []; totalCount: number };
      currentArticle: {
        id: number;
        title: string;
        content: string;
        createdAt: string;
      };
    };
  }) => {
    return {
      article: state.articleSystem.currentArticle,
      pageId:
        state.articleSystem.currentArticle != null
          ? state.articleSystem.currentArticle.id
          : null,
    };
  },
};

const ArticleContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContent);

const ArticleEditContentContainer = connect(
  articleEditContentProps.mapStateToProps,
  articleEditContentProps.mapDispatchToProps
)(
  ArticleEdit as ConnectedComponent<
    React.FC<ArticleEditProps>,
    Pick<ArticleEditProps, "articleId" | "children">
  >
);

export { ArticleContentContainer, ArticleEditContentContainer };
