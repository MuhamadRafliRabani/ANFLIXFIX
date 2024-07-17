"use client";
import { useEffect, useState } from "react";
import { FetchAnime } from "@/utility/Api";
import Type from "@/app/Components/Type-Button/ChoiseType";
import Rekomend from "./Components/Rekomend/Rekomend";

import Home_Page from "./Components/Crousell/Lading Page";
import SecondCrausell from "./Components/Second-Crausell/Card";
import { usePath, useType, useUser } from "@/utility/store/store";

export default function Home() {
  const [Data, setData] = useState([]);
  const { setUser } = useUser();
  const { path } = usePath();
  const { type } = useType();

  const GetDataAnime = async () => {
    try {
      const { data } = await FetchAnime(path);

      setData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userLocal = localStorage.getItem("user");

    if (userLocal) {
      setUser(JSON.parse(userLocal));
    }

    GetDataAnime();
  }, [path]);

  return (
    <div className="overflow-x-hidden bg-[#0E0E0E] relative">
      <Home_Page data={Data} type={type} />
      <Type />
      <SecondCrausell data={Data} path={type} />
      <Rekomend />
    </div>
  );
}
