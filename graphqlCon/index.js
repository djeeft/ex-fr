"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const https_1 = __importDefault(require("https"));
const agent = new https_1.default.Agent({
    rejectUnauthorized: process.env.NODE_ENV === "production"
});
const pclClient = axios_1.default.create({
    responseType: "json",
    timeout: 10000,
    headers: {
        Accept: "application/json"
    }, httpsAgent: agent
});
exports.default = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof process.env.GRAPHQL_URL !== "string")
        throw { error: "Can't find env.GRAPHQL_URL", code: 1 };
    try {
        const res = yield pclClient.post(process.env.GRAPHQL_URL, data, { headers: { 'Content-Type': 'application/json' } });
        return res.data;
    }
    catch (e) {
        if (e === 400)
            throw { error: "Bad input data", code: 2 };
        if (e.isAxiosError) {
            throw { error: "Problem with internet", code: 3, ax_er: e };
        }
        throw { error: "Unknown", code: 4, er_obj: e };
    }
});
