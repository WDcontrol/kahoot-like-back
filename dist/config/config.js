"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIENT_URL = exports.MONGO_URI = exports.PORT = void 0;
// More content in config.ts
const throwIfNot = (obj, prop) => {
    if (obj[prop] === undefined) {
        throw new Error(`Environment is missing variable ${prop}`);
    }
    else {
        return obj[prop];
    }
};
// Validate that we have our expected ENV variables defined!
["PORT", "MONGO_URI", "CLIENT_URL"].forEach((v) => {
    throwIfNot(process.env, v);
});
exports.PORT = parseInt(process.env.PORT);
exports.MONGO_URI = process.env.MONGO_URI;
exports.CLIENT_URL = process.env.CLIENT_URL;
