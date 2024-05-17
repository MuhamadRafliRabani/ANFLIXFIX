import DetailImages from "@/app/Components/Detail-Anime-Comp/DetailImages";
import HeaderDetail from "@/app/Components/Detail-Anime-Comp/HeaderDetail";
import SynopsisDetail from "@/app/Components/Detail-Anime-Comp/SynopsisDetail";
import YoutubePlayer from "@/app/Components/Detail-Anime-Comp/YoutubePlayer";

const { default: DetailAnime } = require("@/app/Components/Detail-Anime-Comp/DetailAnime");

const page = async ({ params }) => {
  const idAnime = params.keyword;
  const Api = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${idAnime}/full`);
  const data = await Api.json();
  const dataAnime = data.data;

  return (
    <div className="pt-12 mx-1 md:mx-auto bg-black">
      <HeaderDetail dataAnime={dataAnime} />
      <div className="flex justify-center items-center w-full flex-col flex-wrap md:flex-row md:gap-2 ">
        <DetailImages imagesUrl={dataAnime.images.jpg?.large_image_url} />
        <SynopsisDetail dataAnime={dataAnime} />
        <DetailAnime dataAnime={dataAnime} />
        <YoutubePlayer dataAnime={dataAnime} />
      </div>
    </div>
  );
};

export default page;
