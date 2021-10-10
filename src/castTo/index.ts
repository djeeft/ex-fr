export function castToBigint(obj: any): bigint | undefined {
    if (obj !== undefined) {
        castToBigintNotUndef(obj);
    }
    return obj;
}

export function castToBigintNotUndef(obj: any): bigint {
    if (typeof obj === "number") {
        obj = BigInt(obj);
    }
    if (typeof obj !== "bigint") {
        throw 422;
    }
    return obj;
}

export function castToString(obj: any): string | undefined {
    if (obj !== undefined) {
        castToStringNotUndef(obj);
    }
    return obj;
}

export function castToStringNotUndef(obj: any): string {
    if (typeof obj !== "string") {
        throw 422;
    }
    return obj;
}

export function castToObject(obj: any): any | undefined {
    if (obj !== undefined) {
        castToObjectNotUndef(obj);
    }
    return obj;
}

export function castToObjectNotUndef<Type>(obj: any): Type {
    if (typeof obj !== "object") {
        throw 422;
    }
    return obj;
}

export function castToBigintArray(obj: any): bigint[] | undefined {
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
        } else {
            throw 422;
        }
    }
    return obj;
}

export function castToBigintOrStringArray(obj: any): bigint[] | string[] | undefined {
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
                    throw 422;
                }
                if (bi && str) {
                    throw 422;
                }
            });
        } else {
            throw 422;
        }
    }
    return obj;
}