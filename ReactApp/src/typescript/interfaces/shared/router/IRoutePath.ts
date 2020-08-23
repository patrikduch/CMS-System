import { RouteConfig } from "react-router-config";
import IRouterConnectedComponentProps from "./IRouter-Connected-Component-Props";

/**
 * @interface IRoutePath => Global shared contract for all root page components.
 */
interface IRoutePath extends IRouterConnectedComponentProps {
  route: RouteConfig;
}

export default IRoutePath;
