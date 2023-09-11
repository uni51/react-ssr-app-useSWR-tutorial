import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:3006/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});
