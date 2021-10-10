"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (server, code = 0, timeout = 1000) => {
    server.close((e) => {
        process.exit(code);
    });
    setTimeout(process.exit, timeout, code).unref();
};
