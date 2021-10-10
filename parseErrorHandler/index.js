"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const castTo_1 = require("../castTo");
const JSONParse_1 = __importDefault(require("../JSONParse"));
exports.default = (data, res, dataObj, testObjFunvc) => {
    try {
        dataObj = (0, JSONParse_1.default)(data);
        dataObj = (0, castTo_1.castToObjectNotUndef)(dataObj);
        if (dataObj === undefined) {
            throw new Error("undefined!");
        }
        return testObjFunvc(dataObj);
    }
    catch (e) {
        if (e === 400) {
            res.writeHead(400);
        }
        else if (e === 422) {
            res.writeHead(422);
        }
        else {
            res.writeHead(500);
        }
        res.end();
        throw new Error("parse error");
    }
};
