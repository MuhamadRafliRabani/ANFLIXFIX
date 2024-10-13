"use client";
import { useEffect } from "react";
import { FetchAnime } from "@/utility/Api";
import Type from "@/app/Components/Type-Button/ChoiseType";
import Rekomend from "./Components/Rekomend/Rekomend";
import Home_Page from "./Components/Crousell/Lading Page";
import SecondCrausell from "./Components/Second-Crausell/Card";
import { usePath, useType, useUser } from "@/utility/store/store";

const Home = async () => {
  const { path } = usePath();
  const { type } = useType();

  const { data, isLoading } = FetchAnime(path);

  useEffect(() => {
    const storage = localStorage.getItem("user");
    if (storage) {
      setUser(JSON.parse(storage));
    }
  }, []);

  if (isLoading) <div className="text-white">Loading....</div>;

  return (
    <div className="relative overflow-x-hidden bg-[#0E0E0E]">
      <Home_Page datas={data?.data} type={type} isLoading={isLoading} />
      <Type />
      <SecondCrausell datas={data?.data} type={type} isLoading={isLoading} />
      <Rekomend />
    </div>
  );
};
export default Home;
