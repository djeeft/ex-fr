export declare function GenerateRandomHash(): Promise<string>;
export declare function generateHash(data: string): Promise<string>;
export declare function GenerateUniqueHash(checkUniqueFunc: (arg0: string) => boolean, attemptsCount?: number): () => Promise<string>;
