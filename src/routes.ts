import {IncomingMessage, ServerResponse} from "http";

export type RoutesDict = {
    [key: string]: (data: string, req: IncomingMessage, res: ServerResponse) => void
}