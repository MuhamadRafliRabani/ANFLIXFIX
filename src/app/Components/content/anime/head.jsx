import {
  BookmarkSimple,
  Star,
  TelevisionSimple,
} from "@phosphor-icons/react/dist/ssr";
import Button from "@/app/Components/ui/button";
import HeaderAnimeSkeleton from "@/app/Components/skeleton/headerAnimeSkeleton";
import Streaming from "../../ui/streaming";

const HeadAnime = ({ image, title, score, isLoading, status, trailer }) => {
  if (isLoading) return <HeaderAnimeSkeleton />;

  return (
    <div className="h-full w-full">
      <div className="flex h-48 w-full items-center md:h-56">
        {/* // images */}
        <div className="relative h-full w-1/3 bg-black md:w-[13%]">
          <img
            src={image}
            alt="Description of image"
            fill
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        {/* content headers */}
        <div className="flex h-full w-4/6 flex-col px-2 pt-6 text-sm font-medium text-white md:w-2/6">
          <h3 className="text-xl font-semibold hover:text-yellow-400 md:text-2xl">
            {title}
          </h3>
          <div className="mt-1 flex items-center space-x-3 md:text-base">
            <span className="flex items-center gap-1 text-text_color">
              <TelevisionSimple className="size-4" />
              {status}
            </span>
            <span className="flex items-center gap-1 text-text_color">
              <Star className="size-4" /> {score}
            </span>
          </div>
          <div className="mt-auto flex w-full space-x-1 font-semibold">
            <Streaming title={title} />

            <Button
              icon={<BookmarkSimple className="size-4" />}
              text="To Watch"
              width="bg-transparent border border-white text-white"
            />
          </div>
        </div>

        {trailer && (
          <div className="mx-auto hidden h-full w-[30%] md:inline-block">
            <iframe
              width="560"
              height="315"
              src={trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="h-full w-full rounded-md"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeadAnime;
