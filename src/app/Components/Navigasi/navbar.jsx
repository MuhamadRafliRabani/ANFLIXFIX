"use client";
import Link from "next/link";
import Search from "./search/Search";
import { useState, useRef, useEffect } from "react";
import {
  ArrowSquareRight,
  BookmarksSimple,
  MagnifyingGlass,
  X,
} from "@phosphor-icons/react";
import Image from "next/image";
import { userSessions } from "@/libs/auth-session";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDas, setIsOpenDas] = useState(false);
  const { user } = userSessions();
  const searchRef = useRef(null);
  const searchBtnRef = useRef(null);

  const handleDas = () => {
    setIsOpenDas((prev) => !prev);
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = (event) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target) &&
      searchBtnRef.current &&
      !searchBtnRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("click", handleClose);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("click", handleClose);
      }
    };
  }, []);

  const UserComp = () => {
    return (
      <div className="flex items-center gap-4">
        <div
          className={`main-transition relative ${
            isOpen ? "hidden md:inline" : ""
          }`}
        >
          <Image
            width={70}
            height={100}
            src={user.image}
            onClick={handleDas}
            alt="user-img"
            className="size-7 cursor-pointer rounded-full"
          />
          <div
            className={`main-transition absolute right-10 top-full h-fit w-[250px] origin-top rounded-md bg-black bg-opacity-70 ps-4 text-start text-base font-medium shadow-md ${
              isOpenDas ? "" : "scale-0"
            }`}
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
                  src={user.image}
                  width={45}
                  height={50}
                  className="size-8 rounded-full"
                  alt="user-img"
                />
                <p className="flex cursor-pointer flex-col justify-center">
                  Dasboard <span className="text-xs">{user?.email}</span>
                </p>
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="z-[100] h-6 w-6"
              >
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
          className="bg-primary rounded-md px-3 py-2 text-sm lg:px-4 lg:text-base"
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
            ref={searchBtnRef}
            onClick={handleOpen}
            className={`w-fit cursor-pointer ${
              isOpen && "absolute right-0 top-6 z-50 md:static"
            }`}
          >
            <MagnifyingGlass className="size-10 rounded-full px-2 md:size-10 md:py-1" />
          </button>
        ) : (
          <button
            onClick={handleOpen}
            className={`w-fit cursor-pointer ${
              isOpen && "absolute right-0 top-6 z-50 md:static"
            }`}
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
          className={`main-transition absolute left-0 top-12 z-40 w-4/5 transition-all duration-500 md:w-full ${
            isOpen ? "scale-100" : "scale-0"
          }`}
        >
          <Search searchRef={searchRef} />
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
