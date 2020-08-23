import { compose } from "redux";

/**
 * @interface IWindowObject => Extended Window object.
 */
export default interface IWindowObject extends Window {
  INITIAL_STATE: {};
  splitPoints?: string[];
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
