import {IncomingMessage, ServerResponse} from "http";

export default (req: IncomingMessage, res: ServerResponse, callback: (data: string) => void) => {
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', async () => {
        callback(data);
    });
}