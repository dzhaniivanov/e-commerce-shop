import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzkyODc0NjgyMjk0MGE1ZDkwNDA1ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjAxNDMyNiwiZXhwIjoxNjM2MjczNTI2fQ.O9beUFz7zr9kLNwqHks8gOwGEcneERA5KuyoR6w7MSY";




export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});