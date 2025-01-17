import { axiosIntesnce } from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";

export const FetchAnime = (resource, key, enbleKey = true) => {
  return useQuery({
    queryKey: [resource, key],
    queryFn: async () => {
      const { data } = await axiosIntesnce.get(resource);
      return data;
    },
    enabled: enbleKey,
  });
};
