"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToBigintOrStringArray = exports.castToBigintArray = exports.castToObjectNoUndef = exports.castToObject = exports.castToStringUndef = exports.castToString = exports.castToBigintNotUndef = exports.castToBigint = void 0;
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
        castToStringUndef(obj);
    }
    return obj;
}
exports.castToString = castToString;
function castToStringUndef(obj) {
    if (typeof obj !== "string") {
        throw 422;
    }
    return obj;
}
exports.castToStringUndef = castToStringUndef;
function castToObject(obj) {
    if (obj !== undefined) {
        castToObjectNoUndef(obj);
    }
    return obj;
}
exports.castToObject = castToObject;
function castToObjectNoUndef(obj) {
    if (typeof obj !== "object") {
        throw 422;
    }
    return obj;
}
exports.castToObjectNoUndef = castToObjectNoUndef;
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
