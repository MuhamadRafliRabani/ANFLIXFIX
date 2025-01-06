// components/Navbar.tsx
import { List, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import NavigationLink from "./navigationLink";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
      className={`fixed top-0 z-50 flex w-full translate-x-0 items-center justify-between gap-10 border-white border-opacity-35 bg-red-400 px-4 py-2 text-white md:px-32 md:py-4 ${change ? "bg-primary_color shadow-sm" : "border-b-[0.1px] bg-transparent"}`}
    >
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold md:text-2xl">
          Kurosaw
        </Link>
      </div>

      <NavigationLink open={open} setisopen={setIsopen} />

      {/* Search Bar */}
      <Search />

      {/* Login Button */}
      <button onClick={() => toggleMenu()} className="text-white">
        <List size={32} />
      </button>
    </nav>
  );
};

export default Navbar;
