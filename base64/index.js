"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBase64ToUtf8 = exports.fromUtf8ToBase64 = void 0;
function fromUtf8ToBase64(data) {
    return Buffer.from(data, 'utf8').toString('base64');
}
exports.fromUtf8ToBase64 = fromUtf8ToBase64;
function fromBase64ToUtf8(data) {
    return Buffer.from(data, 'base64').toString('utf8');
}
exports.fromBase64ToUtf8 = fromBase64ToUtf8;
