"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const server_1 = require("./services/server");
const mongoose_1 = require("./services/mongoose");
mongoose_1.mongoService.connectDb();
server_1.app.startServer();
