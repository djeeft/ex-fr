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
exports.GenerateUniqueHash = exports.Index = exports.GenerateRandomHash = void 0;
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
function Index(data) {
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
exports.Index = Index;
function GenerateUniqueHash(checkUniqueFunc, attemptsCount = 10) {
    return () => __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < attemptsCount; ++i) {
            const hash = yield GenerateRandomHash();
            if (checkUniqueFunc(hash)) {
                return hash;
            }
        }
        throw new Error("Too many attempts");
    });
}
exports.GenerateUniqueHash = GenerateUniqueHash;
