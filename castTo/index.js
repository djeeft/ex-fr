"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToBigintOrStringArray = exports.castToBigintArray = exports.castToObjectNotUndef = exports.castToObject = exports.checkStringMaxLength = exports.checkStringMinLength = exports.castToStringNotUndef = exports.castToString = exports.checkBigintMax = exports.checkBigintMin = exports.castToBigintNotUndef = exports.castToBigint = void 0;
function castToBigint(obj, name_for_err) {
    if (obj !== undefined) {
        return castToBigintNotUndef(obj, name_for_err);
    }
    return obj;
}
exports.castToBigint = castToBigint;
function castToBigintNotUndef(obj, name_for_err) {
    if (typeof obj === "number") {
        obj = BigInt(obj);
    }
    if (typeof obj !== "bigint") {
        throw { c: 422, d: `${name_for_err} is not bigint` };
    }
    return obj;
}
exports.castToBigintNotUndef = castToBigintNotUndef;
function checkBigintMin(obj, name_for_err, min) {
    if (obj >= min)
        return obj;
    throw { c: 422, d: `${name_for_err} less than ${min.toString()}` };
}
exports.checkBigintMin = checkBigintMin;
function checkBigintMax(obj, name_for_err, max) {
    if (obj <= max)
        return obj;
    throw { c: 422, d: `${name_for_err} is greater than ${max.toString()}` };
}
exports.checkBigintMax = checkBigintMax;
function castToString(obj, name_for_err) {
    if (obj !== undefined) {
        return castToStringNotUndef(obj, name_for_err);
    }
    return obj;
}
exports.castToString = castToString;
function castToStringNotUndef(obj, name_for_err) {
    if (typeof obj !== "string") {
        throw { c: 422, d: `${name_for_err} is not string` };
    }
    return obj;
}
exports.castToStringNotUndef = castToStringNotUndef;
function checkStringMinLength(obj, name_for_err, min_length) {
    if (obj.length < min_length)
        throw { c: 422, d: `${name_for_err} length less than ${min_length}` };
    return obj;
}
exports.checkStringMinLength = checkStringMinLength;
function checkStringMaxLength(obj, name_for_err, max_length) {
    if (obj.length > max_length)
        throw { c: 422, d: `${name_for_err} length is greater than ${max_length}` };
    return obj;
}
exports.checkStringMaxLength = checkStringMaxLength;
function castToObject(obj, name_for_err) {
    if (obj !== undefined) {
        return castToObjectNotUndef(obj, name_for_err);
    }
    return obj;
}
exports.castToObject = castToObject;
function castToObjectNotUndef(obj, name_for_err) {
    if (typeof obj !== "object" || obj === null || obj === undefined) {
        throw { c: 422, d: `${name_for_err} is not object` };
    }
    return obj;
}
exports.castToObjectNotUndef = castToObjectNotUndef;
function castToBigintArray(obj, name_for_err) {
    if (obj !== undefined) {
        if (Array.isArray(obj)) {
            obj.forEach(t => {
                if (typeof t === "number") {
                    t = BigInt(t);
                }
                if (typeof t !== "bigint") {
                    throw { c: 422, d: `${name_for_err} is not array of bigint` };
                }
            });
        }
        else {
            throw { c: 422, d: `${name_for_err} is not array of bigint` };
        }
    }
    return obj;
}
exports.castToBigintArray = castToBigintArray;
function castToBigintOrStringArray(obj, name_for_err) {
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
                    throw { c: 422, d: `${name_for_err} is not array of bigint or string` };
                }
                if (bi && str) {
                    throw { c: 422, d: `${name_for_err} is not array of bigint or string` };
                }
            });
        }
        else {
            throw { c: 422, d: `${name_for_err} is not array of bigint or string` };
        }
    }
    return obj;
}
exports.castToBigintOrStringArray = castToBigintOrStringArray;
