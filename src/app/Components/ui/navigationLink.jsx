import Link from "next/link";
import React from "react";
import Button from "./button";

const NavigationLink = ({ open, setisopen }) => {
  return (
    <div
      className={`fixed top-[99.75%] z-[100] flex min-h-svh w-1/2 flex-shrink-0 flex-col gap-3 rounded-tl-md bg-blue-400 bg-primary_color pt-4 font-medium transition-all duration-300 ${open ? "right-0" : "-right-full"}`}
    >
      <>
        <Link
          href="/home"
          className="border-b border-b-text_color px-3 hover:text-gray-400"
        >
          Home
        </Link>
        <Link
          href="/anime/catalog"
          className="border-b border-b-text_color px-3 hover:text-gray-400"
        >
          Catalog
        </Link>
        <Link
          href="/news"
          className="border-b border-b-text_color px-3 hover:text-gray-400"
        >
          News
        </Link>
        <Link
          href="/collections"
          className="mt- border-b border-b-text_color px-3 hover:text-gray-400"
        >
          Collections
        </Link>
      </>

      <Button
        action={() => setisopen()}
        text="close"
        width="w-11/12 ms-1.5 mt-[450px]"
      />
    </div>
  );
};

export default NavigationLink;
