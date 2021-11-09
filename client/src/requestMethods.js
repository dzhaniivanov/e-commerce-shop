import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzkyODc0NjgyMjk0MGE1ZDkwNDA1ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjQ0Mzc4OSwiZXhwIjoxNjM2NzAyOTg5fQ.t3jtVwt670j50RaU0GLoX1ThTEeDLSF3Xxc_OU_tVBQ";



export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});