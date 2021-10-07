import {IncomingMessage, ServerResponse} from "http";

type RoutesDict = {
    [key: string]: (data: string, req: IncomingMessage, res: ServerResponse) => void
}
export default RoutesDict;