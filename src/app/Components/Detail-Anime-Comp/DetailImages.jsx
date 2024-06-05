import Image from "next/image";

const DetailImages = ({ imagesUrl }) => {
  return (
    <div className="w-full object-cover">
      <Image
        width={125}
        height={265}
        src={imagesUrl}
        className="mx-auto rounded-sm lg:w-[160px]"
      />
    </div>
  );
};

export default DetailImages;
