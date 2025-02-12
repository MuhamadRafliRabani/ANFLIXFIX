import { streamingPlatforms } from "@/data/stramingPLatForms";
import { Eye } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";

const Streaming = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex w-fit items-center gap-1 whitespace-nowrap rounded-lg bg-yellow-400 px-3 py-2 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:brightness-105"
      >
        <Eye className="size-4" /> Watch
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(0,0,0,0.9)]">
          <div className="relative max-h-72 w-96 overflow-auto rounded-lg bg-[rgba(18,17,18,255)] p-6 shadow-lg">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-2 top-2 text-xl text-white"
            >
              ×
            </button>
            <h2 className="mb-4 text-lg font-bold text-yellow-400">
              Where to Watch...
            </h2>
            <p className="mb-2 font-semibold text-white">{title}</p>
            <div className="flex flex-col gap-2">
              {streamingPlatforms.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 rounded-lg bg-[${platform.backgroundColor}] p-2 transition hover:bg-[${platform.backgroundColor}]/70`}
                >
                  <img
                    src={platform.icon}
                    className="size-5 rounded-lg"
                    alt={platform.name}
                  />
                  <span className="text-white">{platform.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Streaming;
