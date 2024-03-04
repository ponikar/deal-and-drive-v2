import Axios from "axios";

export const NetworkAPI = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_END_POINT,
  headers: {
    Authorization: "sample_token",
    Accept: "application/json",
  },
});
