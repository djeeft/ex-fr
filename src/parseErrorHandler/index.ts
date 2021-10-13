import {ServerResponse} from "http";
import {castToObjectNotUndef} from "../castTo";
import JSONParse from "../JSONParse";

export default <InType, OutType>(data: string, res: ServerResponse, testObjFunc: (d_o: InType) => OutType): OutType => {
    try {
        let dataObj: InType = JSONParse(data);
        dataObj = castToObjectNotUndef(dataObj);
        if (dataObj === undefined) {
            throw new Error("undefined!");
        }
        return testObjFunc(dataObj);
    } catch (e) {
        if (e === 400) {
            res.writeHead(400);
        } else if (e === 422) {
            res.writeHead(422);
        } else {
            res.writeHead(500);
        }
        res.end();
        throw new Error("parse error");
    }
}