import axios from "axios";
import { getAuthHeader } from "./sessionManagement";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:3040/api/",
  // baseURL: process.env.REACT_APP_BACKEND_URL || "https://legalai.perpetualblock.io/api/",
});

export const setHeader = (token) => {
  apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log(token);
};

export const discardHeader = () => {
  delete apiClient.defaults.headers.common.Authorization;
};

apiClient.defaults.headers.common.Authorization = `Bearer ${getAuthHeader}`;

apiClient.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

/**
 *  @type {import("axios").AxiosInstance}
 */

export default apiClient;
