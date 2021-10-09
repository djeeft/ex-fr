/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http";
declare type RoutesDict = {
    [key: string]: (data: string, req: IncomingMessage, res: ServerResponse) => void;
};
export default RoutesDict;
