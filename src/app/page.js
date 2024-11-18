import Footer from "./Components/content/Footer";
import List_anime from "./Components/content/page/List_anime";
import Home_Page from "./Components/content/page/Hero";
import Rekomend_anime from "./Components/content/page/Rekomend_anime";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Home_Page />
      <div className="relative z-30 min-h-screen w-full space-y-4 overflow-x-hidden px-1 md:-mt-24 md:w-screen md:px-20">
        <List_anime header="Trending Now" jikan="/seasons/now" />
        <div className="h-52 w-full bg-fuchsia-400"></div>
        <List_anime header="Special For You" jikan="seasons/2023/fall" />
        <div className="w-full md:px-4">
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
