export const reUseApi = async (resource, query) => {
  const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}?${query}`);
  const dataAnime = await fetchData.json();
  return dataAnime;
};

export const getRekomendData = async (resource, objectProperty) => {
  const getApi = await reUseApi(resource);
  return getApi.data?.flatMap((result) => result.entry);
};
