/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http";
export declare type RoutesDict = {
    [key: string]: (data: string, req: IncomingMessage, res: ServerResponse) => void;
};
