import https from "https";
import * as http from "http";

export default (server: http.Server, code: number = 0, timeout: number = 1000) => {
    server.close((e) => {
        process.exit(code)
    });
    setTimeout(process.exit, timeout, code).unref();
}