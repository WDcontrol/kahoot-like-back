const IO = require("socket.io");
import { CLIENT_URL } from "../config/config";

export default function Socket(server: any) {
  const io = IO(server, {
    cors: {
      origin: CLIENT_URL,
    },
  });

  io.on("connection", (socket: SocketIO.Socket) => {
    // TODO my actions
  });
}
