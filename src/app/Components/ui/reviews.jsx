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
      <div className="space-y-4">
        {reviews.map((review) => (
          <div className="flex gap-3">
            <Image
              src={review?.user?.images?.jpg.image_url}
              alt="users"
              width={40}
              height={40}
              className="size-8 flex-1 rounded-full"
            />
            <Link href={review?.url} className="space-y-1 text-white">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium">{review?.user?.username}</p>
                <p className="text-sm text-text_color">
                  {formatDate(review?.date)}
                </p>
              </div>
              <article className="line-clamp-4 text-sm font-thin tracking-wide text-slate-300">
                {review?.review}
              </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
