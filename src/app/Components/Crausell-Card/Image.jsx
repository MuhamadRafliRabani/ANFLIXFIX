import Link from "next/link";
import Image from "next/image";

const Images = ({ id, imagese }) => {
  return (
    <Link href={`/detail-anime/${id}`}>
      <div href="#" className=" object-cover w-fit h-[260px]">
        <Image width={170} height={260} className="rounded-md hover:scale-105 main-transition" src={imagese} alt="" />
      </div>
    </Link>
  );
};

export default Images;
