"use client";
import { useCallback, useEffect, useState } from "react";
import { reUseApi } from "@/utility/Api";
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

  const fetchData = useCallback(async (confrimPath) => {
    try {
      const GetData = await reUseApi(confrimPath);
      const response = await GetData.data;
      console.log(response);
      setData(response);
      localStorage.setItem(confrimPath, JSON.stringify(response));
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    const Storage = localStorage.getItem(path);
    if (Storage) {
      setData(JSON.parse(Storage));
    } else {
      fetchData(path);
    }
  }, [path]);

  console.log(Data);

  return (
    <div className="overflow-x-hidden bg-black relative">
      <Home_Page animeHo={Data} type={type} />
      <Type />
      <Card animeCa={Data} title={titleHead} path={`/See-all/${sendPath}`} />
      <Rekomend />
    </div>
  );
}
