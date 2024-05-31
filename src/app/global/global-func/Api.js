import axios from "axios";
export const reUseApi = async (resource, query) => {
  try {
    const fetchData = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}?${query}`);
    const dataAnime = fetchData;
    console.log(dataAnime);
    console.log(dataAnime.data.data);
    return dataAnime.data;
  } catch (error) {
    return error;
  }
};

export const getRekomendData = async (resource, objectProperty) => {
  try {
    const getApi = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}`);
    console.log(getApi.data);
    console.log(getApi.data.data);
    const response = getApi.data.data;
    return response.flatMap((datas) => datas.entry);
  } catch (error) {
    return error;
  }
};
