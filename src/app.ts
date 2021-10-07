import https from "https";
import {ServerOptions} from "https";
import serverMain from "./serverMain";
import {RoutesDict} from "./routes";

export default (options: ServerOptions, hostport: { host: string, port: number }, routes: RoutesDict, onServerRun?: () => void) => {
    const server = https.createServer(options, async (req, res) => {
        await serverMain(req, res, routes);
    });
    server.listen(hostport.port, hostport.host, onServerRun);
}