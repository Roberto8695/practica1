import axios from 'axios';

let token = null;

export const setToken = (newToken) => {
    token = newToken; // Actualiza el token
    console.log('Token configurado:', token); // Log para depuración
};

const api = axios.create({
    baseURL: `http://${process.env.REACT_APP_BACKEND_HOST || '192.168.190.93.'}:3001/api`,  // Cambia a tu IP local
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        console.log('Interceptando solicitud con token:', token); // Log para depuración
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
