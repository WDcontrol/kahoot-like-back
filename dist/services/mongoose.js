"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config/config");
class MongoService {
    constructor(dbUri) {
        this.dbUri = dbUri;
    }
    connectDb() {
        mongoose_1.default
            .connect(this.dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
            .then(() => {
            return console.log("successfully connected");
        }, (err) => {
            console.log(err);
        });
    }
}
exports.mongoService = new MongoService(config_1.MONGO_URI);
