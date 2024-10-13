import { axiosIntesnce } from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";

export const FetchAnime = (resource) => {
  return useQuery({
    queryKey: [resource, []],
    queryFn: async () => {
      const { data } = await axiosIntesnce.get(resource);
      return data;
    },
  });
};
