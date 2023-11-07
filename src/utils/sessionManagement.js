import { removeItem, getData, setData } from "./storageService";

export const clearSession = (removeList) => {
  if (removeList) {
    removeList.forEach((key) => {
      removeItem(key);
    });
  }
};

export const addSession = (session) => {
  const token = `Bearer ${session}`;
  // setData("isLoggedIn", true);
  setData(`Token`, token);
};

export const addSessionRefresh = (session) => {
  setData("isLoggedIn", true);
  setData(`Token`, session.access);
};

export const checkIfLogin = () => getData("isLoggedIn") || false;

export const getAuthHeader = () => getData(`Token`);
