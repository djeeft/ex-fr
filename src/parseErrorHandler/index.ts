import {IncomingMessage, ServerResponse} from "http";
import {castToObjectNoUndef} from "../castTo";
import JSONParse from "../JSONParse";

export default <Type>(data: string, res: ServerResponse, dataObj: Type, testObjFunvc: (dataObj: Type) => Type): Type | undefined => {
    try {
        dataObj = JSONParse(data);
        dataObj = castToObjectNoUndef(dataObj);
        return testObjFunvc(dataObj);
    } catch (e) {
        if (e === 400) {
            res.writeHead(400);
        } else if (e === 422) {
            res.writeHead(422);
        } else {
            res.writeHead(500);
        }
        res.end();
        return undefined;
    }
}