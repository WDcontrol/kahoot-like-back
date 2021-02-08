"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IO = require("socket.io");
const config_1 = require("../config/config");
var games = [];
var players = [];
function Socket(server) {
    const io = IO(server, {
        cors: {
            origin: config_1.CLIENT_URL,
        },
    });
    io.on("connection", (socket) => {
        socket.on("create", (data) => {
            // Create game
        });
        socket.on("hostJoin", (id) => {
            // Host join lobby
        });
        socket.on("hostJoinGame", (id) => {
            // Host join game as spectator
        });
        socket.on("playerJoin", () => {
            // Player join lobby
        });
        socket.on("playerJoinGame", (id) => {
            // Player join game
        });
        socket.on("launchGame", (data) => {
            // Send command to player and host
        });
    });
}
exports.default = Socket;
