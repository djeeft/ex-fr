"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateUniqueHash = exports.GenerateHash = exports.GenerateRandomHash = void 0;
const crypto_async_1 = __importDefault(require("@ronomon/crypto-async"));
const randomstring_1 = __importDefault(require("randomstring"));
function GenerateRandomHash() {
    return new Promise((resolve, reject) => {
        crypto_async_1.default.hash('sha512', Buffer.alloc(512, randomstring_1.default.generate({ length: 512 })), (err, hash) => {
            if (err !== undefined) {
                reject(err);
            }
            else {
                resolve(hash.toString('utf8'));
            }
        });
    });
}
exports.GenerateRandomHash = GenerateRandomHash;
function GenerateHash(data) {
    return new Promise((resolve, reject) => {
        crypto_async_1.default.hash('sha512', Buffer.alloc(data.length, data), (err, hash) => {
            if (err !== undefined) {
                reject(err);
            }
            else {
                resolve(hash.toString('utf8'));
            }
        });
    });
}
exports.GenerateHash = GenerateHash;
function GenerateUniqueHash(checkUniqueFunc, attemptsCount = 10) {
    return async () => {
        for (let i = 0; i < attemptsCount; ++i) {
            const hash = await GenerateRandomHash();
            if (checkUniqueFunc(hash)) {
                return hash;
            }
        }
        throw new Error("Too many attempts");
    };
}
exports.GenerateUniqueHash = GenerateUniqueHash;
