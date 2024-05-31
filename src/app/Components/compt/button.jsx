import Link from "next/link";

const LinkBtn = ({ url, icon }) => {
  console.log(url);
  return (
    <Link href={url} className="border-white rounded-full border-2 hover:bg-slate-300 hover:text-[#E50914] w-8 h-8 p-0.5 flex justify-center items-center">
      {icon}
    </Link>
  );
};

export default LinkBtn;
