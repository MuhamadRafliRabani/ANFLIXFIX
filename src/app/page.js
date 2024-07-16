"use client";
import { useCallback, useEffect, useState } from "react";
import { FetchAnime } from "@/utility/Api";
import Type from "@/app/Components/Type-Button/ChoiseType";
import Rekomend from "./Components/Rekomend/Rekomend";
import {
  usePath,
  useType,
  useUser,
} from "@/utility/global_state/Collection_State";
import Card from "./Components/Second-Crausell/Card";
import Home_Page from "./Components/Crousell/Lading Page";

export default function Home() {
  const [sendPath, setSendPath] = useState("/top");
  const [Data, setData] = useState([]);
  const [titleHead, setTitleHead] = useState("Top Anime");
  const user = useUser((state) => state.user);
  const path = usePath((state) => state.path);
  const type = useType((state) => state.type);

  const GetDataAnime = async () => {
    try {
      const { data } = await FetchAnime(path);

      setData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetDataAnime();
  }, [path]);

  return (
    <div className="overflow-x-hidden bg-[#0E0E0E] relative">
      <Home_Page data={Data} type={type} />
      <Type />
      <Card animeCa={Data} title={titleHead} path={`/See-all/${sendPath}`} />
      <Rekomend />
    </div>
  );
}
