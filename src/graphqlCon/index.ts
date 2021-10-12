import axios from "axios"
import https from "https";

const agent = new https.Agent({
    rejectUnauthorized: process.env.NODE_ENV === "production"
});

const pclClient = axios.create({
    responseType: "json",
    timeout: 10000,
    headers: {
        Accept: "application/json"
    }, httpsAgent: agent
});

export default async <Type>(data: string): Promise<Type & { errors?: { message: string, locations: { line: number, column: number }[] }[] }> => {
    if (typeof process.env.GRAPHQL_URL !== "string")
        throw  {error: "Can't find env.GRAPHQL_URL", code: 1};
    try {
        const res = await pclClient.post(process.env.GRAPHQL_URL, data, {headers: {'Content-Type': 'application/graphql'}});
        return res.data as any;
    } catch (e: any) {
        if (e === 400)
            throw  {error: "Bad input data", code: 2};
        if (e.isAxiosError) {
            throw  {error: "Problem with internet", code: 3, ax_er: e};
        }
        throw {error: "Unknown", code: 4, er_obj: e};
    }
}