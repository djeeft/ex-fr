import https, {ServerOptions} from "https";
import serverMain from "../serverMain";
import RoutesDict from "../routesDict";
import terminate from "../terminate";

export default (options: ServerOptions, hostport: { host?: string, port?: number }, routes: RoutesDict, onServerRun?: () => void) => {
    const server = https.createServer(options, async (req, res) => {
        await serverMain(req, res, routes);
    });
    server.listen(hostport.port, hostport.host, onServerRun);
    process.on('uncaughtException', () => {
        console.log("uncaughtException");
        terminate(server, 1);
    });
    process.on('unhandledRejection', () => {
        console.log("unhandledRejection");
        terminate(server, 1);
    });
    process.on('SIGTERM', () => {
        console.log("SIGTERM");
        terminate(server, 0);
    });
    process.on('SIGINT', () => {
        console.log("SIGINT");
        terminate(server, 0);
    });
}