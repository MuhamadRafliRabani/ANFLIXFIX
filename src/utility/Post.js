import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useAddLibraryMutation = () => {
  return useMutation({
    mutationFn: async (value) => {
      const { data } = await axios.post("/api/create-library-anime", value);
      return data;
    },
    onError: (error) => {
      console.error("Failed to add anime:", error);
    },
    onSuccess: (data) => {
      console.log("Anime added successfully:", data);
    },
  });
};
