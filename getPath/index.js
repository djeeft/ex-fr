"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (url) => {
    if (url === undefined)
        return url;
    const pth = url.split('/');
    if (pth[0] === '')
        pth.shift();
    if (pth[pth.length - 1] === '')
        pth.pop();
    return pth;
};
