// components/Navbar.tsx
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 flex w-full translate-x-0 items-center justify-between border-b-[0.1px] border-white border-opacity-35 bg-transparent px-6 py-4 text-white md:px-32">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold">
          Kurosaw
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden w-3/12 flex-shrink-0 items-center justify-center space-x-4 md:flex">
        <Link href="/home" className="hover:text-gray-400">
          Home
        </Link>
        <Link href="/anime/catalog" className="hover:text-gray-400">
          Catalog
        </Link>
        <Link href="/news" className="hover:text-gray-400">
          News
        </Link>
        <Link href="/collections" className="hover:text-gray-400">
          Collections
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 items-center space-x-2 font-extralight">
        <div className="relative w-11/12">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-md bg-white bg-opacity-10 px-10 py-2 text-white outline-none ring-[0.5px] ring-white placeholder:font-extralight placeholder:text-white"
          />
          <MagnifyingGlass
            size={16}
            className="absolute left-2 top-2 z-20 size-6"
          />
        </div>
      </div>

      {/* Login Button */}
      <div className="space-x-4">
        <button className="rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
          Log In
        </button>
        <button className="rounded-md bg-white px-4 py-2 text-gray-900 hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
