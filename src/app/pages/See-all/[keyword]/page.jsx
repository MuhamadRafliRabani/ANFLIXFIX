"use client";

import CardMain from "@/app/Components/Card/CardMain";
import Pagination from "@/app/Components/Detail-Anime-Comp/pagination";
import { FetchAnime } from "@/utility/Api";
import { usePath, useType } from "@/utility/store/store";
import { setDataAnime } from "@/utility/SwitchType";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const URL = decodeURI(params.keyword);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const { path, setPath } = usePath();
  const { setType } = useType();

  const scrollup = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const fetchData = async () => {
    const { data } = await FetchAnime(path + "?page=" + page);

    setData(data?.data);
  };

  useEffect(() => {
    setDataAnime(URL, setPath, setType);
    fetchData();
  }, [page, URL]);

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
        <CardMain data={data} />
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
