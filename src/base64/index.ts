export function fromUtf8ToBase64(data: string): string {
    return Buffer.from(data, 'utf8').toString('base64');
}

export function fromBase64ToUtf8(data: string): string {
    return Buffer.from(data, 'base64').toString('utf8');
}