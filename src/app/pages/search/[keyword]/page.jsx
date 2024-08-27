"use client";
import CardMain from "@/app/Components/Card/CardMain";
import Pagination from "@/app/Components/Detail-Anime-Comp/pagination";
import { FetchAnime } from "@/utility/Api";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [page, setPage] = useState(1);

  const decode = decodeURI(params.keyword);

  const { data, isLoading } = FetchAnime(`/anime?q=${decode}/page=${page}`);

  console.log(data);

  const scrollup = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const HandleNextPage = () => {
    scrollup();
    if (page <= data?.pagination?.last_visible_page)
      setPage((prev) => prev + 1);
  };

  const HandlePrevPage = () => {
    scrollup();
    if (page < 1) setPage(1);
    setPage((prev) => prev - 1);
  };

  return (
    <section className="min-h-svh overflow-x-hidden bg-black pt-20 text-lg font-semibold text-white">
      <div className="lg:container lg:mx-auto">
        {/* <Header title={"TOP ANIME"} path={"/top"} /> */}
        <h1>pencarian untuk : {decode}</h1>
        <CardMain data={data?.data} />
        <Pagination
          page={page}
          lastpage={data?.pagination?.last_visible_page}
          HandleNextPage={HandleNextPage}
          HandlePrevPage={HandlePrevPage}
        />
      </div>
    </section>
  );
}
