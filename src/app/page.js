import List_anime from "./Components/content/comp/List_anime";
import Home_Page from "./Components/Crousell/Lading Page";

const Home = async () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Home_Page />
      <div className="min-h-screen w-full bg-primary_color">
        <List_anime header="Special For You" jikan="/seasons/now" />
      </div>
    </div>
  );
};
export default Home;
