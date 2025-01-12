import Link from "next/link";
import { listNav } from "@/data/listNav";
import Button from "./ui/button";

const NavigationLink = ({ open }) => {
  return (
    <div
      className={`fixed top-[99.75%] z-[100] flex min-h-screen w-full flex-shrink-0 flex-col gap-3 rounded-tl-md bg-primary_color/95 pt-4 font-medium transition-all duration-300 md:static md:min-h-fit md:w-[30%] md:flex-row md:justify-between md:gap-0 md:bg-transparent md:pt-0 md:opacity-100 ${open ? "top-[99.75%] opacity-100 md:top-0" : "-top-full opacity-0"}`}
    >
      {listNav.map((item, i) => (
        <Link
          key={i}
          href={item.url}
          className="border-slide ms-auto flex w-full items-center gap-2 ps-3 text-base tracking-wider hover:text-yellow-400 md:ms-0 md:w-fit md:ps-0"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavigationLink;
