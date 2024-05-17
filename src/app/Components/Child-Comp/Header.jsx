import Link from "next/link";

const Header = ({ title, path }) => {
  return (
    <div className="w-full p-3 flex justify-between items-center mb-4 md:px-6 ">
      <h1 className="text-white font-bold text-base pt-1">{title}</h1>
      <Link href={path} className="text-white font-bold text-sm border-b effect-btn disabled:bg-slate-300 disabled:cursor-not-allowed">
        lihat semua
      </Link>
    </div>
  );
};

export default Header;
