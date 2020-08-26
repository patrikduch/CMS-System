import { Context } from "koa";

async function responseHandler(ctx: Context, next: any) {
  try {
    await next();
  } catch (err) {
    ctx.throw(err.code, err.message);
  }

  // Ignore post-processing if body was already set
  if (!ctx.state.response || ctx.body) return;

  ctx.status = 200;
  ctx.body = {
    ...ctx.state.response,
  };
}

export { responseHandler };
