import {IncomingMessage, ServerResponse} from "http";
import getPath from "./getPath";
import {RoutesDict} from "./routes";

export default async (req: IncomingMessage, res: ServerResponse, routes: RoutesDict) => {
    if (req.url === undefined || req.method !== 'POST') {
        res.writeHead(404);
        res.end();
        return;
    }
    const paths = getPath(req.url);
    if (paths === undefined) {
        res.writeHead(404);
        res.end();
        return;
    }
    if (paths.length !== 1) {
        res.writeHead(404);
        res.end();
        return;
    }
    const path = paths[0];
    if (routes[path] === undefined) {
        res.writeHead(404);
        res.end();
        return;
    }
    try {
        await new Promise((resolve, reject) => {
            let data = '';
            req.on('data', chunk => {
                data += chunk;
            });
            req.on('end', () => {
                try {
                    routes[path](data, req, res);
                } catch (e) {
                    reject(e);
                    return;
                }
                resolve("ok");
            });
        });
    } catch (e) {
        res.writeHead(500);
        res.end();
        return;
    }
}