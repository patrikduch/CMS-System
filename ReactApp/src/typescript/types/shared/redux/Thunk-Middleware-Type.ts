import { ThunkMiddleware } from "redux-thunk";
import ReduxStateType from "./Redux-State-Type";
import ReduxActionType from "./Redux-Action-Type";
import { AxiosInstance } from "axios";
import { Middleware } from "redux";

/**
 * @type ThunkMiddlewareType => Thunk middleware type anotation with withExtraArgument feature.
 */
type ThunkMiddlewareType = ThunkMiddleware<ReduxStateType, ReduxActionType> & {
  withExtraArgument(axiosInstance: AxiosInstance): Middleware<any, any>;
};

export default ThunkMiddlewareType;
