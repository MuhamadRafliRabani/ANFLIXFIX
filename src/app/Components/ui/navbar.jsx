// components/Navbar.tsx
import { List, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import NavigationLink from "./navigationLink";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCustomState } from "@/libs/useCustomState";

const Navbar = () => {
  const [open, setIsopen] = useCustomState(false);
  const [change, setChange] = useCustomState(false);
  const [query, setQuery] = useCustomState("");
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      router.push(`/anime/search/${encodeURIComponent(query.trim())}`);
    }
  };

  console.log("hamburger", open);

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
      <div className="flex h-1/5 w-full flex-1 items-center space-x-2 font-extralight">
        <div className="relative h-full w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search"
            className="h-full w-full rounded-md bg-white bg-opacity-10 px-10 py-2 text-white outline-none ring-[0.5px] ring-white placeholder:font-extralight placeholder:text-white"
          />
          <MagnifyingGlass
            size={16}
            className="absolute left-2 top-2 z-20 size-6"
          />
        </div>
      </div>

      {/* Login Button */}
      <button onClick={() => toggleMenu()} className="text-white">
        <List size={32} />
      </button>
    </nav>
  );
};

export default Navbar;
