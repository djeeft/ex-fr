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
const https_1 = __importDefault(require("https"));
const serverMain_1 = __importDefault(require("../serverMain"));
const terminate_1 = __importDefault(require("../terminate"));
exports.default = (options, hostport, routes, onServerRun, onServerExit) => {
    const server = https_1.default.createServer(options, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, serverMain_1.default)(req, res, routes);
    }));
    server.listen(hostport.port, hostport.host, onServerRun);
    process.on('uncaughtException', () => {
        (0, terminate_1.default)(server, 1);
    });
    process.on('unhandledRejection', () => {
        (0, terminate_1.default)(server, 1);
    });
    process.on('SIGTERM', () => {
        (0, terminate_1.default)(server, 0);
    });
    process.on('SIGINT', () => {
        (0, terminate_1.default)(server, 0);
    });
};
