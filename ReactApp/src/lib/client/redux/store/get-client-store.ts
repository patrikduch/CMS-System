import axiosInstance from "../../../../shared/api/get-Axios-Instance";
/* 
createStore - Method, which is called after store is made. When is store created import is possbile.
this methods needs an argument (method)
*/
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "../../../../shared/redux/reducers";
import thunk from "redux-thunk";
import CustomWindow from "../../../../typescript/interfaces/shared/dom/IWindowObject";


/**
 * @function getClientStore => Creation of Redux store on the client side.
 * @param windowObject => Extended Window browser object.
 */
const getClientStore = (windowObject: CustomWindow) => {
  // REDUX DEV TOOLS extension
  const composeEnhancers =
    windowObject.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    reducers,
    windowObject.INITIAL_STATE,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
  );
};

export default getClientStore;
