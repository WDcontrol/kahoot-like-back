import Koa, { Context } from "koa";
import KoaBodyParser from "koa-bodyparser";
import KoaCors from "koa2-cors";
import Router from "koa-router";
import http from "http";
import { PORT } from "../config/config";
import socket from "./socket";

class KoaServer extends Koa {
  private port: number;
  readonly app: Koa;
  private server: any;

  constructor(port: number) {
    super();
    this.port = port;
    this.app = app;
    this.applyMiddleware();
    this.server = http.createServer(this.callback());
    this.applyIO();
  }

  private applyIO() {
    socket(this.server);
  }

  private applyMiddleware() {
    this.use(KoaBodyParser());
    this.use(KoaCors());
  }

  public startServer(): void {
    var router = new Router();
    router.get("/", async (ctx: Context, next) => {
      // await ctx.render("index", {});
      ctx.body = `<html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </head>
      <body>
        <button onClick="sendMsg()">Hit Me</button>
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.0/socket.io.js"></script>
        <script>
          const socket = io("http://localhost:${PORT}");
    
          function sendMsg() {
            socket.emit("message", "HELLO WORLD");
          }
        </script>
      </body>
    </html>
    `;
      next();
    });
    this.use(router.routes()).use(router.allowedMethods());
    this.server.listen(PORT);
    console.log(`🍄 http://localhost:${this.port}/graphql 🍄`);
  }
}

export const app = new KoaServer(PORT);
