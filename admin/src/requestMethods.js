import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzkyODc0NjgyMjk0MGE1ZDkwNDA1ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTQ5NTYyMCwiZXhwIjoxNjM1NzU0ODIwfQ.yZGukIB59tJhuIbkHRo-hhOFiQhDXrOT6Sp1Y-KBvrc";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});