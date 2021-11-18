import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzkyODc0NjgyMjk0MGE1ZDkwNDA1ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzIyMzMwOCwiZXhwIjoxNjM3NDgyNTA4fQ.vbywtXSgMbVRN9wUP2X-rWYJB0b2Viql3qFag5GuTsc";




export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});