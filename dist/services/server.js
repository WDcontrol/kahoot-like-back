"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const koa_router_1 = __importDefault(require("koa-router"));
const http_1 = __importDefault(require("http"));
const config_1 = require("../config/config");
const socket_1 = __importDefault(require("./socket"));
class KoaServer extends koa_1.default {
    constructor(port) {
        super();
        this.port = port;
        this.app = exports.app;
        this.applyMiddleware();
        this.server = http_1.default.createServer(this.callback());
        this.applyIO();
    }
    applyIO() {
        socket_1.default(this.server);
    }
    applyMiddleware() {
        this.use(koa_bodyparser_1.default());
        this.use(koa2_cors_1.default());
    }
    startServer() {
        var router = new koa_router_1.default();
        router.get("/", async (ctx, next) => {
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
          const socket = io("http://localhost:${config_1.PORT}");
    
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
        this.server.listen(config_1.PORT);
        console.log(`🍄 http://localhost:${this.port}/graphql 🍄`);
    }
}
exports.app = new KoaServer(config_1.PORT);
