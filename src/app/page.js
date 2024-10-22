import List_anime from "./Components/content/List_anime";
import Home_Page from "./Components/content/Hero";
import Rekomend_anime from "./Components/content/Rekomend_anime";
import Footer from "./Components/content/Footer";

const Home = async () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Home_Page />
      <div className="container min-h-screen w-full space-y-4 bg-primary_color md:px-20">
        <List_anime header="Trending Now" jikan="/seasons/now" />
        <div className="h-52 w-full bg-fuchsia-400"></div>
        <List_anime header="Special For You" jikan="seasons/2023/fall" />
        <div className="w-full px-4">
          <Rekomend_anime
            header="Most Popular"
            jikan="/recommendations/anime"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
