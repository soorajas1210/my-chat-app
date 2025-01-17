import axios from "axios";

const axiosInstance = new axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:8080/api"
      : "/api",
  withCredentials: true,
});

export default axiosInstance;
