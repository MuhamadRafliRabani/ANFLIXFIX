"use client";
import { useUser } from "@/app/Collection_State";
import CardMain from "@/app/Components/Card-Anime/CardMain";
import Pagination from "@/app/Components/Detail-Anime-Comp/pagination";
import { reUseApi } from "@/app/global/global-func/Apis";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [dataAnime, setDataAnime] = useState();
  const [page, setPage] = useState(1);
  const [loding, setLoding] = useState();

  const keyword = params.keyword;
  const decode = decodeURI(keyword);

  const user = useUser((state) => state.user);
  console.log(user);
  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const Api = await reUseApi("/anime", `q=${decode}/page=${page}`);
          setLoding(true);
          setDataAnime(Api);
        } catch (error) {
          alert("error adalah", error);
        } finally {
          setLoding(false);
        }
      };
      fetchData();
    },
    [page],
    [decode]
  );

  const scrollup = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const HandleNextPage = () => {
    setPage((prev) => prev + 1);
    scrollup();
  };

  const HandlePrevPage = () => {
    setPage((prev) => prev - 1);
    scrollup();
  };

  return (
    <section className="text-white text-lg font-semibold overflow-x-hidden pt-20 bg-black">
      {loding ? (
        <div className="Loader"></div>
      ) : (
        <div>
          {/* <Header title={"TOP ANIME"} path={"/top"} /> */}
          <h1>pencarian untuk : {decode}</h1>
          <CardMain animeCM={dataAnime?.data} />
          <Pagination page={page} lastpage={dataAnime?.pagination?.last_visible_page} HandleNextPage={HandleNextPage} HandlePrevPage={HandlePrevPage} />
        </div>
      )}
    </section>
  );
}
