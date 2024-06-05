import DetailImages from "@/app/Components/Detail-Anime-Comp/DetailImages";
import HeaderDetail from "@/app/Components/Detail-Anime-Comp/HeaderDetail";
import SynopsisDetail from "@/app/Components/Detail-Anime-Comp/SynopsisDetail";
import YoutubePlayer from "@/app/Components/Detail-Anime-Comp/YoutubePlayer";
import { reUseApi } from "@/app/global/global-func/Api";

const {
  default: DetailAnime,
} = require("@/app/Components/Detail-Anime-Comp/DetailAnime");

const page = async ({ params }) => {
  const idAnime = params.keyword;
  const Api = await reUseApi(`/anime/${idAnime}`);
  const data = await Api;
  const dataAnime = data.data;

  return (
    <div className="pt-16 mx-1 md:mx-auto bg-black h-fit md:h-svh lg:pt-20 ">
      <HeaderDetail dataAnime={dataAnime} />
      <div className="flex justify-center items-center  flex-col flex-wrap md:flex-row md:gap-2 lg:container lg:mx-auto ">
        <DetailImages imagesUrl={dataAnime.images.jpg?.large_image_url} />
        <SynopsisDetail dataAnime={dataAnime} />
        <DetailAnime dataAnime={dataAnime} />
        <YoutubePlayer dataAnime={dataAnime} />
      </div>
    </div>
  );
};

export default page;
