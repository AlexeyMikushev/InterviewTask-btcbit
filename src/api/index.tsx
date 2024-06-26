import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const http = axios.create({ baseURL });
