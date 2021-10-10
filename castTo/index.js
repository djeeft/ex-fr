"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToBigintOrStringArray = exports.castToBigintArray = exports.castToObjectNotUndef = exports.castToObject = exports.castToStringNotUndef = exports.castToString = exports.castToBigintNotUndef = exports.castToBigint = void 0;
function castToBigint(obj) {
    if (obj !== undefined) {
        castToBigintNotUndef(obj);
    }
    return obj;
}
exports.castToBigint = castToBigint;
function castToBigintNotUndef(obj) {
    if (typeof obj === "number") {
        obj = BigInt(obj);
    }
    if (typeof obj !== "bigint") {
        throw 422;
    }
    return obj;
}
exports.castToBigintNotUndef = castToBigintNotUndef;
function castToString(obj) {
    if (obj !== undefined) {
        castToStringNotUndef(obj);
    }
    return obj;
}
exports.castToString = castToString;
function castToStringNotUndef(obj) {
    if (typeof obj !== "string") {
        throw 422;
    }
    return obj;
}
exports.castToStringNotUndef = castToStringNotUndef;
function castToObject(obj) {
    if (obj !== undefined) {
        castToObjectNotUndef(obj);
    }
    return obj;
}
exports.castToObject = castToObject;
function castToObjectNotUndef(obj) {
    if (typeof obj !== "object") {
        throw 422;
    }
    return obj;
}
exports.castToObjectNotUndef = castToObjectNotUndef;
function castToBigintArray(obj) {
    if (obj !== undefined) {
        if (Array.isArray(obj)) {
            obj.forEach(t => {
                if (typeof t === "number") {
                    t = BigInt(t);
                }
                if (typeof t !== "bigint") {
                    throw 422;
                }
            });
        }
        else {
            throw 422;
        }
    }
    return obj;
}
exports.castToBigintArray = castToBigintArray;
function castToBigintOrStringArray(obj) {
    if (obj !== undefined) {
        let bi = false, str = false;
        if (Array.isArray(obj)) {
            obj.forEach(t => {
                if (typeof t === "number") {
                    t = BigInt(t);
                }
                if (typeof t === 'string') {
                    str = true;
                }
                else if (typeof t === 'bigint') {
                    bi = true;
                }
                else {
                    throw 422;
                }
                if (bi && str) {
                    throw 422;
                }
            });
        }
        else {
            throw 422;
        }
    }
    return obj;
}
exports.castToBigintOrStringArray = castToBigintOrStringArray;
