import axios from "axios";

const context = "http://localhost:3000";

export const post = async <T extends Record<string, any>> (path: string, params: T) => {
  return await axios.post(context + path, params);
}
export const get = async <T, U>(path: string, params: T) => {
  return await axios.get(context + path, { params }).then((response) => response.data) as U;
}
export const put = async <T extends Record<string, any>> (path: string, params: T ) => {
  return await axios.put(context + path, params);
}
export const Delete = async (path: string) => {
  return await axios.delete(context + path);
}
