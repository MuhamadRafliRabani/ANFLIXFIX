import { axiosIntesnce } from "@/libs/axios";
import axios from "axios";

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
    const getApi = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}`
    );
    console.log(getApi.data);
    console.log(getApi.data.data);
    const response = getApi.data.data;
    return response.flatMap((datas) => datas.entry);
  } catch (error) {
    return error;
  }
};
