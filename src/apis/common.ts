import axios from "axios";

const context = "http://localhost:3000";

export const get = async <T, U>(path: string, params: T) => {
  return await axios.get(context + path, { params }).then((response) => response.data) as U;
}