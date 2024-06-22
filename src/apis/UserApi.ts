import axios from "axios";

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
  return await axios.get(path, { params }).then((response) => response.data) as UserResponse;
};
