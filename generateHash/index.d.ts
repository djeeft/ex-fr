export declare function GenerateRandomHash(): Promise<string>;
export declare function GenerateHash(data: string): Promise<string>;
export declare function GenerateUniqueHash(checkUniqueFunc: (arg0: string) => boolean, attemptsCount?: number): () => Promise<string>;
