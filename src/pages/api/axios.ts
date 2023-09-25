// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { AxiosError } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;
const WEATHER_API_BASE_URL = process.env.WEATHER_BASE_URL as string;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY as string;

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

const weatherInstance = axios.create({
  baseURL: WEATHER_API_BASE_URL,
});

// Request 인터셉터
apiInstance.interceptors.request.use(
  async (config) => {
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;

    if (user?.accessToken) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }

    return Promise.resolve(config);
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// Response 인터셉터
apiInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error.response?.data);
  },
);

export { apiInstance, weatherInstance, WEATHER_API_KEY };
