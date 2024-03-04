import { useMutation } from "@tanstack/react-query";
import { NetworkAPI } from "..";

type Body = {
  user_details: {
    email: string;
    name: string;
    phone: string;
    password: string;
  };
  user_type_details: {
    type: "Agency";
    name: string;
    email: string;
    phone: string;
  };
};

export const useSignup = () => {
  return useMutation({
    mutationFn: async (data: Body) => {
      return NetworkAPI.post("/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });
};
