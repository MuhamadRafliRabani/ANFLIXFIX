import { axiosIntesnce } from "@/libs/axios";

export const FetchAnime = async (resource, query) => {
  try {
    const FetchDataAnime = await axiosIntesnce(resource);

    const dataAnime = FetchDataAnime;
    console.log(dataAnime);

    return {
      data: dataAnime.data,
    };
  } catch (error) {
    return error;
  }
};

export const getRekomendData = async (resource, objectProperty) => {
  try {
    const { data } = await axiosIntesnce(resource);

    const response = data.data;

    return response.flatMap((datas) => datas.entry);
  } catch (error) {
    return error;
  }
};
