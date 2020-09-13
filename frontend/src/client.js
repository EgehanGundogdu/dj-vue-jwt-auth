import axios from "axios";
import router from "./router";
import store from "./store";

const client = axios.create({
  baseURL: process.env.BACKEND_API_URL || "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("accessToken") || "";
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status == 401) {
      store.commit("logout");
      if (router.currentRoute.name === "login") {
        return Promise.reject(error);
      }
      router.push({ name: "login" });
    }
    return Promise.reject(error);
  }
);

export default client;
