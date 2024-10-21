import List_anime from "./Components/content/List_anime";
import Home_Page from "./Components/content/Hero";
import Rekomend_anime from "./Components/content/Rekomend_anime";

const Home = async () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Home_Page />
      <div className="min-h-screen w-full space-y-4 bg-primary_color">
        <List_anime header="Trending Now" jikan="/seasons/now" />
        <div className="h-52 w-full bg-fuchsia-400"></div>
        <List_anime header="Special For You" jikan="seasons/2023/fall" />
        <div>
          <Rekomend_anime
            header="Most Popular"
            jikan="/recommendations/anime"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
