import JSONbig from "json-bigint";

export default (data: string, name_for_err: string) => {
    try {
        return JSONbig.parse(data);
    } catch (err) {
        throw {c: 400, d: `${name_for_err} is not json`};
    }
}