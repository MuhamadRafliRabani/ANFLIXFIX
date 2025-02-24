"use client";
import { List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useEffect } from "react";
import { useCustomState } from "@/libs/useCustomState";
import Search from "./Navigasi/search/Search";
import NavigationLink from "./navigationLink";
import Auth from "./auth";

const Navbar = () => {
  const [open, setIsopen] = useCustomState(false);
  const [change, setChange] = useCustomState(false);

  const toggleMenu = () => setIsopen(!open);

  useEffect(() => {
    const NAVBAR_HEIGHT = 58; // Tinggi navbar

    const checkScroll = () => {
      if (window.scrollY >= NAVBAR_HEIGHT) {
        setChange(true);
      } else {
        setChange(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[9999] flex max-h-11 w-full translate-x-0 items-center justify-between bg-transparent px-2 py-3 text-white shadow-sm transition-all duration-300 md:w-full md:max-w-full md:gap-8 md:px-3 ${
        change ? "border-b border-white border-opacity-35" : "border-opacity-0"
      }`}
    >
      <div className="flex h-full max-w-fit items-center space-x-4">
        <button onClick={toggleMenu} className="max-w-fit text-white md:hidden">
          <List size={32} />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="border-slide w-full text-xl font-semibold italic text-yellow-400 transition-all hover:border-yellow-400 hover:text-white md:text-2xl"
        >
          Anflix
        </Link>
      </div>

      <NavigationLink open={open} setIsopen={setIsopen} />

      <div className="flex">
        {/* Search Bar */}
        <Search />

        {/* Login Button */}

        <Auth />
      </div>
    </nav>
  );
};

export default Navbar;
