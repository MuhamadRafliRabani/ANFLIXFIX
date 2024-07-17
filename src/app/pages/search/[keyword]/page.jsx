"use client";
import CardMain from "@/app/Components/Card/CardMain";
import Pagination from "@/app/Components/Detail-Anime-Comp/pagination";
import { FetchAnime } from "@/utility/Api";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [Data, setData] = useState();
  const [page, setPage] = useState(1);

  const decode = decodeURI(params.keyword);

  const fetchData = async () => {
    try {
      const { data } = await FetchAnime(`/anime?q=${decode}/page=${page}`);

      setData(data.data);
    } catch (error) {
      alert("error adalah", error);
    }
  };

  useEffect(
    () => {
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
      <div className="lg:container lg:mx-auto">
        {/* <Header title={"TOP ANIME"} path={"/top"} /> */}
        <h1>pencarian untuk : {decode}</h1>
        <CardMain data={Data} />
        <Pagination
          page={page}
          lastpage={Data?.pagination?.last_visible_page}
          HandleNextPage={HandleNextPage}
          HandlePrevPage={HandlePrevPage}
        />
      </div>
    </section>
  );
}
