"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getPath_1 = __importDefault(require("../getPath"));
exports.default = async (req, res, routes) => {
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
        await new Promise((resolve, reject) => {
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
};
