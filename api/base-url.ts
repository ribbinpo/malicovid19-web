import axios from "axios";

interface apiType {
  baseURL?: string
};

const api = ({ baseURL }: apiType) => axios.create({
  baseURL,
  timeout: 10000,
});

export default api;