"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_bigint_1 = __importDefault(require("json-bigint"));
exports.default = (data) => {
    try {
        return json_bigint_1.default.parse(data);
    }
    catch (err) {
        throw 400;
    }
};
