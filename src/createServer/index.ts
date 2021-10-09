import https from "https";
import {ServerOptions} from "https";
import serverMain from "../serverMain";
import RoutesDict from "../routesDict";

export default (options: ServerOptions, hostport: { host?: string, port?: number }, routes: RoutesDict, onServerRun?: () => void, onServerExit?: () => void) => {
    const server = https.createServer(options, async (req, res) => {
        await serverMain(req, res, routes);
    });
    server.listen(hostport.port, hostport.host, onServerRun);
    if(onServerExit)
        process.on('exit', onServerExit);
}