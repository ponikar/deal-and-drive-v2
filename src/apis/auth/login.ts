import { useMutation } from "@tanstack/react-query";
import { NetworkAPI } from "..";

type Body = {
  email: string;
  password: string;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: Body) => {
      return NetworkAPI.get("/login", {
        data,
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });
};
