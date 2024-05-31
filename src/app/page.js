"use client";
import { useCallback, useEffect, useState } from "react";
import { reUseApi } from "./global/global-func/Api";
import Card from "@/app/Components/Crausell/Card";
import Header from "@/app/Components/Child-Comp/Header";
import Type from "@/app/Components/Type-Button/ChoiseType";
import Home_Page from "./Components/Landing-Page/Lading Page";
import Rekomend from "./Components/Rekomend/Rekomend";
import {
  usePath,
  useType,
  useUser,
} from "./global/global_state/Collection_State";

export default function Home() {
  const [sendPath, setSendPath] = useState("/top");
  const [Data, setData] = useState([]);
  const [titleHead, setTitleHead] = useState("Top Anime");
  const user = useUser((state) => state.user);
  const path = usePath((state) => state.path);
  const type = useType((state) => state.type);

  const fetchData = async () => {
    try {
      const GetData = await reUseApi(path);
      const response = await GetData.data;
      console.log(response);
      setData(response);
      localStorage.setItem([path, response]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const Storage = localStorage.getItem(path);
    if (Storage) {
      setData(Storage);
    } else {
      fetchData();
    }
  }, [path]);

  console.log(Data);

  return (
    <div className="overflow-x-hidden bg-black relative">
      <Home_Page animeHo={Data} type={type} />
      <Type />
      <Header title={titleHead} path={`/SeeAll/${sendPath}`} />
      <Card animeCa={Data} />
      <Rekomend />
    </div>
  );
}
