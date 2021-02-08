const IO = require("socket.io");
import { CLIENT_URL } from "../config/config";
import { Game } from "../models/Game.model";

var games = [];
var players = [];

export default function Socket(server: any) {
  const io = IO(server, {
    cors: {
      origin: CLIENT_URL,
    },
  });

  io.on("connection", (socket: SocketIO.Socket) => {
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

    socket.on("playerJoinGame", (id: string) => {
      // Player join game
    });

    socket.on("launchGame", (data) => {
      // Send command to player and host
    });
  });
}
