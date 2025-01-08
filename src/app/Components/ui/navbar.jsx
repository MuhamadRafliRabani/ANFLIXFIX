// components/Navbar.tsx
import { List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import NavigationLink from "./navigationLink";
import { useEffect } from "react";
import { useCustomState } from "@/libs/useCustomState";
import Search from "../Navigasi/search/Search";

const Navbar = () => {
  const [open, setIsopen] = useCustomState(false);
  const [change, setChange] = useCustomState(false);

  const toggleMenu = () => setIsopen(!open);

  // handle close menu when slide
  const handleClose = (event) => {
    if (
      sidebar.current &&
      !sidebar.current.contains(event.target) &&
      triger.current &&
      !triger.current.contains(event.target)
    ) {
      setIsopen(false);
    }
  };

  // handle close menu when slide
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY) {
        setIsopen(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[9999] flex max-h-11 w-full translate-x-0 items-center justify-between border-b border-white border-opacity-35 px-2 py-3 text-white shadow-sm ${change ? "bg-primary_color shadow-sm" : "bg-transparent"}`}
    >
      <div className="flex h-full max-w-full items-center space-x-4">
        {/* Logo */}
        <Link href="/" className="max-w-fit text-xl font-semibold">
          Kurosaw
        </Link>
      </div>

      <NavigationLink open={open} setisopen={setIsopen} />

      {/* Search Bar */}
      <Search />

      {/* Login Button */}
      <button onClick={() => toggleMenu()} className="max-w-fit text-white">
        <List size={32} />
      </button>
    </nav>
  );
};

export default Navbar;
