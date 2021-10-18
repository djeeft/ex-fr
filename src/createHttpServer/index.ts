import http, {ServerOptions} from "http";
import serverMain from "../serverMain";
import RoutesDict from "../routesDict";
import terminateHttp from "../terminateHttp";

export default (options: ServerOptions, hostport: { host?: string, port?: number }, routes: RoutesDict, onServerRun?: () => void) => {
    const server = http.createServer(options, async (req, res) => {
        await serverMain(req, res, routes);
    });
    server.listen(hostport.port, hostport.host, onServerRun);
    process.on('uncaughtException', () => {
        console.log("uncaughtException");
        terminateHttp(server, 1);
    });
    process.on('unhandledRejection', () => {
        console.log("unhandledRejection");
        terminateHttp(server, 1);
    });
    process.on('SIGTERM', () => {
        console.log("SIGTERM");
        terminateHttp(server, 0);
    });
    process.on('SIGINT', () => {
        console.log("SIGINT");
        terminateHttp(server, 0);
    });
}