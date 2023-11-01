import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.notion.com/v1/pages'
});
export default api;