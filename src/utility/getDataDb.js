import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useUser } from "./store/store";

export const HitDb = (email) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axios.get("/api/dataDb/", {
        params: { email },
      });
      return data;
    },
  });
};
