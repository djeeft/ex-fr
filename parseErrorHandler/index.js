"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const castTo_1 = require("../castTo");
const JSONParse_1 = __importDefault(require("../JSONParse"));
exports.default = (data, root_is_object, res, testObjFunc) => {
    try {
        let dataObj = (0, JSONParse_1.default)(data, "Input");
        if (root_is_object)
            dataObj = (0, castTo_1.castToObjectNotUndef)(dataObj, "Input");
        return testObjFunc(dataObj);
    }
    catch (e) {
        if (typeof e === "object" && e !== null) {
            if (typeof e.c === "number") {
                if (typeof e.d === "string") {
                    res.writeHead(e.c, e.d);
                }
                else {
                    res.writeHead(e.c);
                }
            }
            else {
                res.writeHead(500);
            }
        }
        else {
            res.writeHead(500);
        }
        res.end();
        throw { c: 400, d: "Input parse error" };
    }
};
