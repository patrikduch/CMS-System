import { PropsWithChildren } from "react";
import { RouteComponentProps } from "react-router-dom";


/**
 * @interface IRouterConnectedComponentProps => Necessary contract that is required for every component that is connected to the React Router. 
 */
export default interface IRouterConnectedComponentProps
  extends PropsWithChildren<RouteComponentProps> {}
