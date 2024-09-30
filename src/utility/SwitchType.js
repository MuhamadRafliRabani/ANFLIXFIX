export const useSetDataAnime = (type, setPath, setType) => {
  switch (type) {
    case "Trend Up":
      setPath("/top/anime");
      break;
    case null:
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
