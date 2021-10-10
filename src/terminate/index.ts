import https from "https";

export default (server: https.Server, code: number = 0, timeout: number = 1000) => {
    server.close((e) => {
        process.exit(code)
    });
    setTimeout(process.exit, timeout, code).unref();
}