// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 text-white">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold">
          Kurosaw
        </Link>

        {/* Navigation Links */}
        <div className="hidden space-x-4 md:flex">
          <Link href="/home" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/catalog" className="hover:text-gray-400">
            Catalog
          </Link>
          <Link href="/news" className="hover:text-gray-400">
            News
          </Link>
          <Link href="/collections" className="hover:text-gray-400">
            Collections
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-500 outline-none focus:ring focus:ring-gray-600"
        />
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
