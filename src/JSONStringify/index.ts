import JSONbig from "json-bigint";

export default (data: any) => {
    try {
        return JSONbig.stringify(data);
    } catch (err) {
        throw 400;
    }
}