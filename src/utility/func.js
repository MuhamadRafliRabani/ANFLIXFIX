import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const handleColection = () => {
  return useMutation({
    mutationFn: async (value) => {
      const { data } = await axios.post("/api/collection", value);
      return data;
    },
  });
};
