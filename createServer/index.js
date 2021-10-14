"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const serverMain_1 = __importDefault(require("../serverMain"));
const terminate_1 = __importDefault(require("../terminate"));
exports.default = (options, hostport, routes, onServerRun) => {
    const server = https_1.default.createServer(options, async (req, res) => {
        await (0, serverMain_1.default)(req, res, routes);
    });
    server.listen(hostport.port, hostport.host, onServerRun);
    process.on('uncaughtException', () => {
        console.log("uncaughtException");
        (0, terminate_1.default)(server, 1);
    });
    process.on('unhandledRejection', () => {
        console.log("unhandledRejection");
        (0, terminate_1.default)(server, 1);
    });
    process.on('SIGTERM', () => {
        console.log("SIGTERM");
        (0, terminate_1.default)(server, 0);
    });
    process.on('SIGINT', () => {
        console.log("SIGINT");
        (0, terminate_1.default)(server, 0);
    });
};
