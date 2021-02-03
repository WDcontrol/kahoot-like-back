import "dotenv/config";
import { app } from "./services/server";
import { mongoService } from "./services/mongoose";

mongoService.connectDb();
app.startServer();
