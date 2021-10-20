import JSONbig from "json-bigint";

export default (data: any, name_for_err: string) => {
    try {
        return JSONbig.stringify(data);
    } catch (err) {
        throw {c: 400, d: `${name_for_err} cannot be converted to json`};
    }
}