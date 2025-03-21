import Link from "next/link";
import { listNav } from "@/data/listNav";
import { userSessions } from "@/libs/auth-session";
import Button from "./ui/button";
import { signIn, signOut } from "next-auth/react";

const NavigationLink = ({ open, setIsopen }) => {
  const { user } = userSessions();

  const mobileClass =
    "fixed top-[99.75%] z-[100] -ms-2 flex h-[calc(100vh-100px)] max-h-screen w-full flex-col gap-3 rounded-tl-md bg-primary_color/95 pt-4 font-medium transition-all duration-300";

  const laptopClass =
    "md:static md:ms-0 md:h-fit md:w-[25%]  md:flex-row md:justify-between md:gap-0 md:bg-transparent md:pt-0 md:opacity-100";

  const openClass = open
    ? "top-[99.75%] opacity-100 md:top-0"
    : "-top-full hidden opacity-0 md:flex";

  const linkClass =
    "border-slide ms-auto flex w-full items-center gap-2 ps-3 text-base tracking-wider hover:text-yellow-400 md:ms-0 md:w-fit md:ps-0";

  return (
    <div className={`${mobileClass} ${laptopClass} ${openClass}`}>
      {listNav.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          onClick={() => setIsopen(false)}
          className={linkClass}
        >
          {item.name}
        </Link>
      ))}
      {user?.email && (
        <Link
          href="/user/dashboard"
          onClick={() => setIsopen(false)}
          className="border-slide ms-auto flex w-full items-center gap-2 ps-3 text-base tracking-wider hover:text-yellow-400 md:ms-0 md:hidden md:w-fit md:ps-0"
        >
          My Dashboard
        </Link>
      )}
    </div>
  );
};

export default NavigationLink;
