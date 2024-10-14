"use client";
import { FetchAnime } from "@/utility/Api";

import Rekomend from "./Components/Rekomend/Rekomend";
import Home_Page from "./Components/Crousell/Lading Page";
import SecondCrausell from "./Components/Second-Crausell/Card";
import { usePath, useType, useUser } from "@/utility/store/store";

const Home = async () => {
  const { path } = usePath();
  const { type } = useType();

  const { data, isLoading } = FetchAnime(path);

  if (isLoading) <div className="text-white">Loading....</div>;

  return (
    <h1 className="text-center text-5xl text-black">SEDANG MAINTENETCE</h1>
    // <div className="bg-primary_color text-second_color relative overflow-x-hidden">
    //   <Home_Page datas={data?.data} type={type} isLoading={isLoading} />
    //   <SecondCrausell datas={data?.data} type={type} isLoading={isLoading} />
    //   <Rekomend />
    // </div>
  );
};
export default Home;
