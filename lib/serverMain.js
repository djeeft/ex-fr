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
const getPath_1 = __importDefault(require("./getPath"));
exports.default = (req, res, routes) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.url === undefined || req.method !== 'POST') {
        res.writeHead(404);
        res.end();
        return;
    }
    const paths = (0, getPath_1.default)(req.url);
    if (paths === undefined) {
        res.writeHead(404);
        res.end();
        return;
    }
    if (paths.length !== 1) {
        res.writeHead(404);
        res.end();
        return;
    }
    const path = paths[0];
    if (routes[path] === undefined) {
        res.writeHead(404);
        res.end();
        return;
    }
    try {
        yield new Promise((resolve, reject) => {
            let data = '';
            req.on('data', chunk => {
                data += chunk;
            });
            req.on('end', () => {
                try {
                    routes[path](data, req, res);
                }
                catch (e) {
                    reject(e);
                    return;
                }
                resolve("ok");
            });
        });
    }
    catch (e) {
        res.writeHead(500);
        res.end();
        return;
    }
});
