"use client";

import CardMain from "@/app/Components/Card/CardMain";
import Pagination from "@/app/Components/Detail-Anime-Comp/pagination";
import { reUseApi } from "@/utility/Api";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const pathAnime = decodeURI(params.keyword);

  const [page, setPage] = useState(1);
  const [path, setPathAnime] = useState(
    pathAnime === "top" ? "/top/anime" : "/seasons/upcoming"
  );
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

  useEffect(() => {
    const fetchData = async () => {
      const Api = await reUseApi(`${path}`, `page=${page}`);
      setData(Api);
    };
    fetchData();
  }, [page]);

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
    <section className="text-white bg-black w-full">
      <div className="lg:container lg:mx-auto contain-none pt-16 w-full">
        <h1 className="w-full font-medium lg:text-lg">Halaman : {page}</h1>
        <CardMain animeCM={data.data} />
        <Pagination
          page={page}
          lastpage={data.pagination?.last_visible_page}
          HandleNextPage={HandleNextPage}
          HandlePrevPage={HandlePrevPage}
        />
      </div>
    </section>
  );
};

export default Page;
