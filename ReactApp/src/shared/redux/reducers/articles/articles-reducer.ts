// Import of all actions types
import * as actionTypes from "../../actions/action-types";
// Import initial state configuration
import initialState from "../initial-state";

/* Type checking. */
import ArticleModelType from "../../../../typescript/types/app/models/article-system/Article-Model-Type";
import ReduxActionType from "../../../../typescript/types/shared/redux/Redux-Action-Props-Type";

/* Reducer`s payload type. */
type ActionPayloadType = {
  type: string;
  data: {
    articles: ArticleModelType[];
    article: ArticleModelType;
    pageCount: Number /* Wrapper object for primitive data type (to use in spead object.) */;
    articleId: number;
  };
};

const reducer = (
  state = initialState.articleSystem,
  action: ReduxActionType<ActionPayloadType>
) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_ARTICLES:
      return {
        ...(state.articles.content = action.payload.data.articles),
      };

    case actionTypes.FETCH_RECENT_ARTICLES:
      return {
        ...state,
        articles: action.payload.data.articles,
      };

    case actionTypes.FETCH_PAGGED_ARTICLES:
      return {
        ...state,
        ...(state.articles.content = action.payload.data.articles),
      };

    case actionTypes.REMOVE_ARTICLE:
      const test = state.articles.content.filter(
        (arg: ArticleModelType) => arg.id != action.payload.data.articleId
      );

      return {
        ...state,
        ...(state.articles.content = test),
      };

    case actionTypes.FETCH_ARTICLE_BY_ID:
      return {
        ...state,
        currentArticle: action.payload.data.article,
      };

    /* UPDATE articles doesnt change Redux store. */
    case actionTypes.UPDATE_ARTICLE:
      return {
        ...state,
      };

    /*
       FETCH TOTAL ARTICLE`S PAGE COUNT
    */
    case actionTypes.FETCH_ARTICLES_PAGE_COUNT:
      return {
        ...state,
        ...(state.articles.totalCount = action.payload.data.pageCount),
      };

    /*
      RESET DETAIL OF SELECTED ARTICLE.
    */
    case actionTypes.RESET_ACTUAL_ARTICLE:
      return {
        ...state,
        currentArticle: null,
      };

    default:
      return state;
  }
};
export default reducer;
