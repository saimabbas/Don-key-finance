import axios from "axios";

const DEV_URL = "http://localhost:5000";
const PROD_URL = "https://api.by.finance";

const BASE_URL = process.env.NODE_ENV === "production" ? PROD_URL: DEV_URL;

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "X-Api-Secret": "supersecret"
    }
});

