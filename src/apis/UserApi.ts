import { get } from "./common";

interface UserRequest {
  email: string;
}

interface UserResponse {
  email: string;
  username: string;
  admissionYear: number;
  major: string;
  preferRegion: string;
  gender: string;
}

export const findUserByEmail = async (email: string) => {
  const path = "/user";
  const params = { email };
  return await get<UserRequest, UserResponse>(path, params);
};
