import Image from "next/image";
import Button from "./button";
import { Plus } from "@phosphor-icons/react/dist/ssr";

const Reviews = ({ reviews }) => {
  return (
    <div className="mt-6">
      <div className="mb-4 space-y-2">
        <h3 className="text-xl font-semibold text-white">Recent Reviews</h3>
        <Button
          text="Write a Review"
          icon={<Plus size={16} />}
          width="w-full"
        />
      </div>
      <div className="flex gap-3">
        <Image
          src="/Google.png"
          alt={` avatar`}
          width={40}
          height={40}
          className="size-8 flex-1 rounded-full"
        />
        <div className="space-y-2 text-white">
          <div className="flex items-center gap-2">
            <p className="font-medium">miyamura</p>
            <p className="mt-1 text-sm text-text_color">12 October 2022</p>
          </div>
          <p className="text-sm font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            ullam ab adipisci illo tempore repellendus dolore quibusdam quisquam
            sed deserunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
