import mongoose from "mongoose";
import { PORT, MONGO_URI } from "../config/config";

class MongoService {
  public dbUri: string;

  constructor(dbUri: string) {
    this.dbUri = dbUri;
  }

  public connectDb(): void {
    mongoose
      .connect(this.dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(
        () => {
          return console.log("successfully connected");
        },
        (err) => {
          console.log(err);
        }
      );
  }
}

export const mongoService: MongoService = new MongoService(MONGO_URI);
