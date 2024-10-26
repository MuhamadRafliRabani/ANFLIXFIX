import { axiosIntesnce } from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";

export const FetchAnime = (resource, seeAnime) => {
  return useQuery({
    queryKey: [resource, seeAnime],
    queryFn: async () => {
      const { data } = await axiosIntesnce.get(resource);
      return data;
    },
  });
};
