declare const _default: <Type>(data: string) => Promise<Type & {
    errors?: {
        message: string;
        locations: {
            line: number;
            column: number;
        }[];
    }[] | undefined;
}>;
export default _default;
