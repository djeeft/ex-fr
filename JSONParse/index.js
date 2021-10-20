"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_bigint_1 = __importDefault(require("json-bigint"));
exports.default = (data, name_for_err) => {
    try {
        return json_bigint_1.default.parse(data);
    }
    catch (err) {
        throw { c: 400, d: `${name_for_err} is not json` };
    }
};
