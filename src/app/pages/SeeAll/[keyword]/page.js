"use client";

import CardMain from "@/app/Components/Card/CardMain";
import Pagination from "@/app/Components/Detail-Anime-Comp/pagination";
import { reUseApi } from "@/app/global/global-func/Api";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const pathAnime = decodeURI(params.keyword);

  const [page, setPage] = useState(1);
  const [path, setPathAnime] = useState(pathAnime === "top" ? "/top/anime" : "/seasons/upcoming");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (pathAnime) {
      case "top":
        setPathAnime("/top/anime");
        break;
      case "season":
        setPathAnime("/seasons/upcoming");
        break;
      default:
        break;
    }
  }, [pathAnime]);

  const scrollup = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  useEffect(
    () => {
      const fetchData = async () => {
        const Api = await reUseApi(`${path}`, `page=${page}`);
        setData(Api);
      };
      fetchData();
    },
    [page],
    [path]
  );

  console.log(data);

  const HandleNextPage = () => {
    setPage((prev) => prev + 1);
    scrollup();
  };

  const HandlePrevPage = () => {
    setPage((prev) => prev - 1);
    scrollup();
  };

  return (
    <section className="text-white mt-8 bg-black">
      <h1 className="w-full text-center">HEADER : {page}</h1>
      <CardMain animeCM={data.data} />
      <Pagination page={page} lastpage={data.pagination?.last_visible_page} HandleNextPage={HandleNextPage} HandlePrevPage={HandlePrevPage} />
    </section>
  );
};

export default Page;
