"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IO = require("socket.io");
const config_1 = require("../config/config");
function Socket(server) {
    const io = IO(server, {
        cors: {
            origin: config_1.CLIENT_URL,
        },
    });
    io.on("connection", (socket) => {
        // TODO my actions
    });
}
exports.default = Socket;
