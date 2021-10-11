import axios from "axios"
import JSONStringify from "../JSONStringify";
import https from "https";

const agent = new https.Agent({
    rejectUnauthorized: process.env.NODE_ENV === "production"
});

const pclClient = axios.create({
    responseType: "text",
    timeout: 10000,
    headers: {
        Accept: "text"
    }, httpsAgent: agent
});

export default async (data: string) => {
    if (typeof process.env.GRAPHQL_URL !== "string")
        throw  {error: "Can't find env.GRAPHQL_URL", code: 1};
    try {
        const res = await pclClient.post(process.env.GRAPHQL_URL, data);
        return res.data;
    } catch (e: any) {
        if (e === 400)
            throw  {error: "Bad input data", code: 2};
        if (e.isAxiosError) {
            throw  {error: "Problem with internet", code: 3, ax_er: e};
        }
        throw {error: "Unknown", code: 4, er_obj: e};
    }
}