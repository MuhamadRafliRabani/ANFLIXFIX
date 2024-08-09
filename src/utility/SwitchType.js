export const useSetDataAnime = (type, setType, setPath) => {
  console.log(type);

  switch (type) {
    case "Trend Up":
      setPath("/top/anime");
      break;
    case "This Season":
      setPath("/seasons/now");
      break;
    case "Season Coming":
      setPath("/seasons/upcoming");
      break;
    case "Top":
      setPath("/random/anime");
      break;
    default:
      return;
  }
  setType(type);
};
