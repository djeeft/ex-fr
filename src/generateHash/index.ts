import cryptoAsync from "@ronomon/crypto-async";
import randomstring from "randomstring";

export function GenerateRandomHash() {
    return new Promise<string>((resolve, reject) => {
        cryptoAsync.hash('sha512', Buffer.alloc(512, randomstring.generate({length: 512})), (err, hash) => {
            if (err !== undefined) {
                reject(err);
            } else {
                resolve(hash.toString('utf8'));
            }
        });
    });
}

export function generateHash(data: string) {
    return new Promise<string>((resolve, reject) => {
        cryptoAsync.hash('sha512', Buffer.alloc(data.length, data), (err, hash) => {
            if (err !== undefined) {
                reject(err);
            } else {
                resolve(hash.toString('utf8'));
            }
        });
    });
}

export function GenerateUniqueHash(checkUniqueFunc: (arg0: string) => boolean, attemptsCount: number = 10) {
    return async () => {
        for (let i = 0; i < attemptsCount; ++i) {
            const hash = await GenerateRandomHash();
            if (checkUniqueFunc(hash)) {
                return hash;
            }
        }
        throw new Error("Too many attempts");
    }
}