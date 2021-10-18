import { ServerOptions } from "http";
import RoutesDict from "../routesDict";
declare const _default: (options: ServerOptions, hostport: {
    host?: string;
    port?: number;
}, routes: RoutesDict, onServerRun?: (() => void) | undefined) => void;
export default _default;
