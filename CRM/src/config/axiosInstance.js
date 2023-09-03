import axios from "axios";


const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = import.meta.env.VTE_BASE_URL;
axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.timeout =import.meta.env.VITE_API_TIMEOUT;

export default axiosInstance;