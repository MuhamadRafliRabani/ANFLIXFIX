"use client";
import Link from "next/link";
import Search from "./search/Search";
import { useState, useEffect, useRef } from "react";
import {
  ArrowSquareRight,
  BookmarksSimple,
  MagnifyingGlass,
  X,
  XCircle,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useUser } from "@/utility/store/store";
import { SignOut } from "@/service/firebase";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDas, setIsOpenDas] = useState(false);
  const { user } = useUser();
  const searchRef = useRef(null);
  const router = useRouter();

  const handleOut = async (e) => {
    e.preventDefault();
    localStorage.clear();
    const res = await SignOut();
    router.refresh();
    console.log(res);
  };

  const handleDas = () => {
    setIsOpenDas((prev) => !prev);
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  console.log("ISoPEN", isOpen);

  const UserComp = () => {
    return (
      <div className="flex items-center gap-4">
        <div
          className={`main-transition relative ${isOpen ? "hidden md:inline" : ""}`}
        >
          <Image
            width={70}
            height={100}
            src="/Home_img/Home1.jpg"
            onClick={handleDas}
            className="cursor-pointer rounded-full"
          />
          <div
            className={`main-transition absolute right-10 top-full h-fit w-[250px] origin-top rounded-md bg-black bg-opacity-70 ps-4 text-start text-base font-medium shadow-md ${isOpenDas ? "" : "scale-0"}`}
          >
            <Link
              href={"/pages/Dasboard/collec_Page"}
              className="flex items-center gap-2 py-2"
            >
              <BookmarksSimple className="h-5 w-5" />
              koleksi
            </Link>
            <div className="flex items-center justify-between">
              <Link
                href={"/pages/Dasboard"}
                className="flex items-center justify-start gap-2 py-2"
              >
                <Image
                  src={"/Home_img/Home1.jpg"}
                  width={45}
                  height={50}
                  className="h-auto w-auto rounded-full"
                  alt="user-img"
                />
                <p className="flex cursor-pointer flex-col justify-center">
                  Dasboard <span className="text-xs">{user?.email}</span>
                </p>
              </Link>
              <button onClick={handleOut} className="z-[100] h-6 w-6">
                <ArrowSquareRight className="me-2 h-full w-full cursor-pointer hover:w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AuthButton = () => {
    return (
      <div className="flex items-center gap-2 font-semibold">
        <Link
          href={"/pages/auth/sign-up"}
          className="rounded-md bg-primary px-3 py-2 text-sm lg:px-4 lg:text-base"
        >
          <p>Sign Up</p>
        </Link>
        <Link
          href={"/pages/auth/sign-in"}
          className="hover:text-pribg-primary main-transition rounded-lg px-3 py-2 text-sm text-white hover:bg-white lg:px-4 lg:text-base"
        >
          <p>Sign In</p>
        </Link>
      </div>
    );
  };

  const SearchBtn = () => {
    return (
      <>
        {!isOpen ? (
          <button
            ref={searchRef}
            onClick={handleOpen}
            className={`w-fit cursor-pointer ${isOpen && "absolute right-0 top-6 z-50 md:static"}`}
          >
            <MagnifyingGlass className="size-10 rounded-full px-2 md:size-10 md:py-1" />
          </button>
        ) : (
          <button
            onClick={handleOpen}
            className={`w-fit cursor-pointer ${isOpen && "absolute right-0 top-6 z-50 md:static"}`}
          >
            <X className="size-6 text-white md:size-8" />
          </button>
        )}
      </>
    );
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent">
      <nav className="relative flex items-center justify-between px-2 py-2 text-white md:px-4">
        <Link href={"/"}>
          <h1 className="text-pribg-primary ms-2 cursor-pointer text-xl font-extrabold">
            ANFLIX
          </h1>
        </Link>
        <div
          className={`main-transition absolute left-0 z-40 w-4/5 md:w-full ${isOpen ? "scale-100" : "scale-0"}`}
        >
          <Search />
        </div>
        <div className="relative flex items-center justify-center gap-3">
          <SearchBtn />
          {user?.email ? <UserComp /> : <AuthButton />}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
