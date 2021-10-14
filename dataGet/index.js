"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, callback) => {
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', async () => {
        callback(data);
    });
};
