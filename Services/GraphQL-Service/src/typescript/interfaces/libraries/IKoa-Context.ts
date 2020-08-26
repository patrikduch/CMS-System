// Base interface for exteded Koa Context
import { Context } from "koa";

/* 
  Extended Koa Context interface. Support for params object.

*/
export default interface IKoaContext extends Context {
  params: any;
}
