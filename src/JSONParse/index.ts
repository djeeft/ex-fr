import JSONbig from "json-bigint";

export default (data: string) => {
    try {
        return JSONbig.parse(data);
    } catch (err) {
        throw 400;
    }
}