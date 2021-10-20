import {ServerResponse} from "http";
import {castToObjectNotUndef} from "../castTo";
import JSONParse from "../JSONParse";

export default <InType, OutType>(data: string, root_is_object: boolean, res: ServerResponse, testObjFunc: (d_o: InType) => OutType): OutType => {
    try {
        let dataObj: InType = JSONParse(data, "Input");
        if (root_is_object)
            dataObj = castToObjectNotUndef(dataObj, "Input");
        return testObjFunc(dataObj);
    } catch (e: any) {
        if (typeof e === "object" && e !== null) {
            if (typeof e.c === "number") {
                if (typeof e.d === "string") {
                    res.writeHead(e.c, `Input error: ${e.d}`);
                } else {
                    res.writeHead(e.c, "Input error");
                }
            } else {
                res.writeHead(500);
            }
        } else {
            res.writeHead(500);
        }
        res.end();
        throw {c: 400, d: "Input parse error"};
    }
}