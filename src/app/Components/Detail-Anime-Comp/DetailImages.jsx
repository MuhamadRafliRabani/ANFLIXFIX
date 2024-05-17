import Image from "next/image";

const DetailImages = ({ imagesUrl }) => {
  return (
    <div className="w-full object-cover">
      <Image width={125} height={280} src={imagesUrl} className="mx-auto rounded-sm" />
    </div>
  );
};

export default DetailImages;
