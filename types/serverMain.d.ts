import { IncomingMessage, ServerResponse } from "http";
import { RoutesDict } from "./routes";
declare const _default: (req: IncomingMessage, res: ServerResponse, routes: RoutesDict) => Promise<void>;
export default _default;
