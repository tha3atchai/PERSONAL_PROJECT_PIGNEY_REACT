import axios from "axios";
import { BACKEND_URL } from "./env";
import localStorageService from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

axios.interceptors.request.use(function (config) {
    if(config.url.includes("/login") && config.url.includes("/register")) return config;

    const token = localStorageService.getToken();

    if(token) config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error.response?.status === 401){
        localStorageService.removeToken();
        window.location.reload();
        return Promise.reject(error);
    }
    return Promise.reject(error);
  });

export default axios;