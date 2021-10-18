import https, {ServerOptions} from "https";
import serverMain from "../serverMain";
import RoutesDict from "../routesDict";
import terminateHttps from "../terminateHttps";

export default (options: ServerOptions, hostport: { host?: string, port?: number }, routes: RoutesDict, onServerRun?: () => void) => {
    const server = https.createServer(options, async (req, res) => {
        await serverMain(req, res, routes);
    });
    server.listen(hostport.port, hostport.host, onServerRun);
    process.on('uncaughtException', () => {
        console.log("uncaughtException");
        terminateHttps(server, 1);
    });
    process.on('unhandledRejection', () => {
        console.log("unhandledRejection");
        terminateHttps(server, 1);
    });
    process.on('SIGTERM', () => {
        console.log("SIGTERM");
        terminateHttps(server, 0);
    });
    process.on('SIGINT', () => {
        console.log("SIGINT");
        terminateHttps(server, 0);
    });
}