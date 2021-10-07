import { ServerOptions } from "https";
import { RoutesDict } from "./routes";
declare const _default: (options: ServerOptions, hostport: {
    host: string;
    port: number;
}, routes: RoutesDict, onServerRun?: (() => void) | undefined) => void;
export default _default;
