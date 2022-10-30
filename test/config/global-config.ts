import axios from "axios";

axios.interceptors.response.use((config) => {
    /** In dev, intercepts request and logs it into console for dev */
    console.info(JSON.stringify({ method: config.request.method, url: config.request.url, data: config.request.data, response: config.data }));
    return config;
}, (error) => {
    console.info(JSON.stringify({ method: error.response.request.method, url: error.response.request.path, data: error.response.config.data, response: error.response.data }));
    return Promise.reject(error);
});