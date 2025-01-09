import Image from "next/image";
import Button from "./button";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { formatDate } from "@/libs/date";
import Link from "next/link";

const Reviews = ({ reviews }) => {
  return (
    <div className="pb-2">
      <div className="-mt-4 mb-4 space-y-2">
        <h3 className="-mt-2 pb-2 text-xl font-semibold text-white">
          Recent Reviews
        </h3>
        <Button
          text="Write a Review"
          icon={<Plus size={16} />}
          width="w-full"
        />
      </div>
      <div className="w-[95vw] max-w-sm space-y-4 pe-1 md:max-w-full">
        {reviews?.length != 0 ? (
          reviews?.map((review) => (
            <div className="flex gap-3">
              <Image
                src={review?.user?.images?.jpg.image_url}
                alt="users"
                width={40}
                height={40}
                className="size-8 flex-1 rounded-full md:size-10"
              />
              <Link href={review?.url} className="space-y-1 text-white">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium md:text-base">
                    {review?.user?.username}
                  </p>
                  <p className="text-sm text-text_color md:text-[0.9rem]">
                    {formatDate(review?.date)}
                  </p>
                </div>
                <article className="line-clamp-4 w-full text-sm font-thin tracking-wide text-slate-300 md:line-clamp-none md:text-[0.9rem]">
                  {review?.review}
                </article>
              </Link>
            </div>
          ))
        ) : (
          <h3 className="w-full pb-2 text-center tracking-wide text-white">
            No Reviews
          </h3>
        )}
      </div>
    </div>
  );
};

export default Reviews;
