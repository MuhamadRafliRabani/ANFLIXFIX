import {
  BookmarkSimple,
  Eye,
  Star,
  TelevisionSimple,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Button from "../../ui/button";

const HeadAnime = ({ image, title, score, animeId, status }) => {
  return (
    <div className="h-full w-full">
      <div className="flex h-48 w-full items-center">
        {/* // images */}
        <div className="relative h-full w-1/3">
          <Image
            src={image}
            alt="Description of image"
            fill
            className="rounded-md object-cover"
          />
        </div>
        {/* content headers */}
        <div className="flex h-full w-4/6 flex-col px-2 pt-6 text-sm font-medium text-white">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="mt-1 flex items-center space-x-3">
            <span className="flex items-center gap-1 text-text_color">
              <TelevisionSimple className="size-4" />
              {status}
            </span>
            <span className="flex items-center gap-1 text-text_color">
              <Star className="size-4" /> {score}
            </span>
          </div>
          <div className="mt-auto block w-full space-x-1">
            <Button black icon={<Eye className="size-4" />} text="Watching" />
            <Button
              black
              icon={<BookmarkSimple className="size-4" />}
              text="To Watch"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadAnime;
