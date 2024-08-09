"use client";
import Link from "next/link";
import Search from "./search/Search";
import { useState, useEffect, useRef } from "react";
import { ArrowSquareRight, BookmarksSimple, MagnifyingGlass, XCircle } from "@phosphor-icons/react";
import Image from "next/image";
import { useUser } from "@/utility/store/store";
import { SignOut } from "@/service/firebase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDas, setIsOpenDas] = useState(false);
  const user = useUser((state) => state.user);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOut = async (e) => {
    e.preventDefault();
    await SignOut();
  };

  const handleDas = () => {
    setIsOpenDas((prev) => !prev);
  };

  const handleSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const UserComp = () => {
    return (
      <div className="flex gap-4 items-center">
        <div className={`relative main-transition ${isOpen ? "hidden md:inline" : ""}`}>
          <Image width={70} height={100} src="/Home_img/Home1.jpg" onClick={handleDas} className="rounded-full cursor-pointer" />
          <div className={`w-[250px] h-fit font-medium text-start absolute top-full main-transition origin-top right-10 ps-4 bg-black bg-opacity-70 rounded-md text-base shadow-md ${isOpenDas ? "" : "scale-0"}`}>
            <Link href={"/pages/Dasboard/collec_Page"} className="flex items-center gap-2 py-2">
              <BookmarksSimple className="w-5 h-5" />
              koleksi
            </Link>
            <div className="flex justify-between items-center">
              <Link href={"/pages/Dasboard"} className="flex justify-start items-center gap-2 py-2">
                <Image src={"/Home_img/Home1.jpg"} width={45} height={50} className="rounded-full h-auto w-auto" alt="user-img" />
                <p className="flex justify-center flex-col cursor-pointer">
                  Dasboard <span className="text-xs">{user?.email}</span>
                </p>
              </Link>
              <button onClick={handleOut} className="w-6 h-6 z-[100] ">
                <ArrowSquareRight className="hover:w-8 w-full h-full me-2 cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AuthButton = () => {
    return (
      <div className="flex gap-2 items-center font-semibold">
        <Link href={"/pages/auth/sign-up"} className="bg-primary px-3 py-2 rounded-md text-sm lg:text-base lg:px-4">
          <p>Sign Up</p>
        </Link>
        <Link href={"/pages/auth/sign-in"} className="text-white rounded-lg hover:bg-white hover:text-pribg-primary px-3 py-2 text-sm lg:text-base lg:px-4 main-transition">
          <p>Sign In</p>
        </Link>
      </div>
    );
  };

  const SearchBtn = () => {
    return <button className={`w-fit py-2 px-4 rounded-full hover:bg-primary `}>{!isOpen ? <MagnifyingGlass className="w-6 h-8" onClick={() => handleSearch()} /> : <XCircle className="w-6 h-8" onClick={() => handleSearch()} />}</button>;
  };

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav className="md:px-4 py-2 px-2 flex justify-between items-center text-white relative">
        <Link href={"/"}>
          <h1 className=" font-extrabold text-xl ms-2 cursor-pointer text-pribg-primary">ANFLIX</h1>
        </Link>
        <div ref={searchRef} className={`absolute left-0 w-4/5 main-transition z-40 md:w-full ${isOpen ? "scale-100" : "scale-0"}`}>
          <Search />
        </div>
        <div className="flex gap-3 justify-center items-center">
          <SearchBtn />
          {user?.email ? <UserComp /> : <AuthButton />}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
