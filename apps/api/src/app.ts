import Koa from "koa";
import { createKoaMiddleware } from "trpc-koa-adapter";
import { appRouter } from "./root";
import { createTRPCContext } from "~/utils";
import Router from "@koa/router";
import cors from "@koa/cors";

const app = new Koa();

// [POC] Add the tRPC middleware
const adapter = createKoaMiddleware({
  createContext: createTRPCContext,
  router: appRouter,
  prefix: "/trpc",
});
app.use(cors()).use(adapter);

export { app };
