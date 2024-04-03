import axios from "axios";
import { env } from "../config/env";

export default axios.create({
  baseURL: env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
