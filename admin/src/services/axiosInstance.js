import axios from "axios";

const API_URL='https://1b5dfee85b36d8f7.mokky.dev';
export const a=axios.create(
    {
baseURL:API_URL,
    }
);