import { connect, ConnectedComponent } from "react-redux";

/* Component to connect. */
import ArticleAdd from "../../../../connected-components/article-system/articles/crud/Article-Add";

/* Actions to dispatch. */
import * as articleActions from "../../../actions/articles/articles-actions";

import { bindActionCreators, Dispatch } from "redux";

/* Type checking.  */
import ArticleAddProps from "../../../../../typescript/types/shared/connected-components/article-system/articles/crud/Article-Add-Props";

/**
 * @function mapDispatchToProps => Mapping actions to the specific component.
 * @param dispatch => Dispatch method for triggering incoming Redux store manipulation.
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(articleActions, dispatch),
  };
};

/**
 * Creation of Redux connected component for adding new articles.
 */
const ArticleAddContainer = 
  connect(
    null,
    mapDispatchToProps
  )(
    ArticleAdd as ConnectedComponent<React.FC<ArticleAddProps>, Pick<{}, never>>
  );

export { ArticleAddContainer };
