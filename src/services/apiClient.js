import axios from "axios";
import { API_PREFIXED_BASE_URL } from "../config/api";

export const apiClient = axios.create({
  baseURL: API_PREFIXED_BASE_URL,
  timeout: 20000,
});

