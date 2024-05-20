"use client";

// state
import { useEffect, useState } from "react";
// Api
import { reUseApi } from "@/app/global/global-func/Apis";
// components
import Card from "@/app/Components/Crausell-Card/Card";
import Header from "@/app/Components/Child-Comp/Header";
import Type from "@/app/Components/Type-Anime-Comp/ChoiseType";
import Home_Page from "./Components/Landing-Page/Lading Page";
import Rekomend from "./Components/Rekomend/Rekomend";
import { useUser } from "./Collection_State";
import CardSkeleton from "./global/cardSeleton";

export default function Home() {
  // mengatur path untuk api
  const [path, setPath] = useState("/top/anime");
  const [sendPath, setSendPath] = useState("/top");

  // mengkap data api
  const [Data, setData] = useState([]);

  // mengatur type
  const [type, setType] = useState("Trend Up");
  const [titleHead, setTitleHead] = useState("Top Anime");
  const [stylePicked, setStylePicked] = useState("Trend Up");

  // render api
  useEffect(() => {
    const FetchApi = async () => {
      try {
        const Api = await reUseApi(path);
        setData(Api.data);
      } catch (error) {
        alert("errornya", error);
      }
    };
    FetchApi();
  }, [path]);

  // funtion handle Type dan genre
  const handleTypeClick = (type) => {
    setType(type);

    switch (type) {
      // type unutk crousell
      case "Trend Up":
        setPath("/top/anime");
        setTitleHead("Top Anime");
        setSendPath("/top");
        setStylePicked("Trend Up");
        break;
      case "This Season":
        setPath("/seasons/now");
        setTitleHead("This Season Anime");
        setSendPath("/season");
        setStylePicked("This Season");
        break;
      case "Season Coming":
        setPath("/seasons/upcoming");
        setTitleHead("Coming Anime");
        setSendPath("/season");
        setStylePicked("Season Coming");
        break;

      case "Top":
        setPath("/random/anime");
        setTitleHead("Top Anime");
        setSendPath("/top");
        setStylePicked("Top");
        break;
      default:
        break;
    }
  };

  const user = useUser((state) => state.user);
  console.log(user);

  return (
    <div className="overflow-x-hidden bg-black">
      {/* component Home_page menerima data anime dan type anime */}
      <Home_Page animeHo={Data} type={type} />
      {/* component type menerima fungsi untuk mengatur type anime */}
      <Type onclickType={handleTypeClick} stylePicked={stylePicked} />
      {/* header menerima titleHead dan path untuk halaman see all */}
      <Header title={titleHead} path={`/SeeAll/${sendPath}`} />
      <Card animeCa={Data} />
      <Rekomend />
      <CardSkeleton cards={8} />
    </div>
  );
}
