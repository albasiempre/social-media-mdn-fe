import axios from "axios";

const apiClient = axios.create({
  // baseURL: "https://social-media-mdn-be.onrender.com",
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
