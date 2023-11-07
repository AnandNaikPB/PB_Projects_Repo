import apiClient, { discardHeader, setHeader } from "./apiClient";
export * as notify from "./notifyUtil";
export * as session from "./sessionManagement";

export const headerUtils = { discardHeader, setHeader };
export default apiClient;
