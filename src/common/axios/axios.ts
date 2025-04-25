import axios from "axios";



const api = axios.create({
    baseURL: "https://your-api-url.com/api", 
    headers: {
        "Content-Type": "application/json",
    },
});

// Har bir so'rovga token qo'shish 
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // yoki sessionStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

 
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.warn("Token eskirgan yoki noto‘g‘ri. Qayta login qiling.");
        }
        return Promise.reject(error);
    }
);

export default api;
