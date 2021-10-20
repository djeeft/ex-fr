export function castToBigint(obj: any, name_for_err: string): bigint | undefined {
    if (obj !== undefined) {
        return castToBigintNotUndef(obj, name_for_err);
    }
    return obj;
}

export function castToBigintNotUndef(obj: any, name_for_err: string): bigint {
    if (typeof obj === "number") {
        obj = BigInt(obj);
    }
    if (typeof obj !== "bigint") {
        throw {c: 422, d: `${name_for_err} is not bigint`};
    }
    return obj;
}

export function checkBigintMin(obj: bigint, name_for_err: string, min: bigint): bigint {
    if (obj >= min)
        return obj;
    throw {c: 422, d: `${name_for_err} less than ${min.toString()}`};
}

export function checkBigintMax(obj: bigint, name_for_err: string, max: bigint): bigint {
    if (obj <= max)
        return obj;
    throw {c: 422, d: `${name_for_err} is greater than ${max.toString()}`};
}

export function castToString(obj: any, name_for_err: string): string | undefined {
    if (obj !== undefined) {
        return castToStringNotUndef(obj, name_for_err);
    }
    return obj;
}

export function castToStringNotUndef(obj: any, name_for_err: string): string {
    if (typeof obj !== "string") {
        throw {c: 422, d: `${name_for_err} is not string`};
    }
    return obj;
}

export function checkStringMinLength(obj: string, name_for_err: string, min_length: number): string {
    if (obj.length < min_length)
        throw {c: 422, d: `${name_for_err} length less than ${min_length}`};
    return obj;
}

export function checkStringMaxLength(obj: string, name_for_err: string, max_length: number): string {
    if (obj.length > max_length)
        throw {c: 422, d: `${name_for_err} length is greater than ${max_length}`};
    return obj;
}

export function castToObject<Type>(obj: any, name_for_err: string): Type | undefined {
    if (obj !== undefined) {
        return castToObjectNotUndef(obj, name_for_err);
    }
    return obj;
}

export function castToObjectNotUndef<Type>(obj: any, name_for_err: string): Type {
    if (typeof obj !== "object" || obj === null || obj === undefined) {
        throw {c: 422, d: `${name_for_err} is not object`};
    }
    return obj;
}

export function castToBigintArray(obj: any, name_for_err: string): bigint[] | undefined {
    if (obj !== undefined) {
        if (Array.isArray(obj)) {
            obj.forEach(t => {
                if (typeof t === "number") {
                    t = BigInt(t);
                }
                if (typeof t !== "bigint") {
                    throw {c: 422, d: `${name_for_err} is not array of bigint`};
                }
            });
        } else {
            throw {c: 422, d: `${name_for_err} is not array of bigint`};
        }
    }
    return obj;
}

export function castToBigintOrStringArray(obj: any, name_for_err: string): bigint[] | string[] | undefined {
    if (obj !== undefined) {
        let bi = false, str = false;
        if (Array.isArray(obj)) {
            obj.forEach(t => {
                if (typeof t === "number") {
                    t = BigInt(t);
                }
                if (typeof t === 'string') {
                    str = true;
                } else if (typeof t === 'bigint') {
                    bi = true;
                } else {
                    throw {c: 422, d: `${name_for_err} is not array of bigint or string`};
                }
                if (bi && str) {
                    throw {c: 422, d: `${name_for_err} is not array of bigint or string`};
                }
            });
        } else {
            throw {c: 422, d: `${name_for_err} is not array of bigint or string`};
        }
    }
    return obj;
}