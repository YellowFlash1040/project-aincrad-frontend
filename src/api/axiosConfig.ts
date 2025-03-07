import axios from 'axios';

const { VITE_API_BASE_URL } = import.meta.env;

export const api = axios.create({
  baseURL: VITE_API_BASE_URL
});

export const setAxiosToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default api;
