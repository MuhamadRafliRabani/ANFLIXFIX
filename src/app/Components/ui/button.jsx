"use client";

import { cn } from "@/libs/cn";

const Button = ({ action, second, text, icon, width }) => {
  return (
    <button
      onClick={action}
      className={cn(
        `whitespace-nowrap rounded-lg bg-white px-3 py-2 text-xs font-medium text-black shadow-sm ${width} transition-all duration-200 hover:brightness-105`,
        {
          "bg-yellow-400 text-white transition-all hover:bg-yellow-500": second,
        },
      )}
    >
      <p className="flex flex-1 flex-shrink-0 flex-grow items-center justify-center gap-1 font-medium tracking-wider">
        {icon} {text}
      </p>
    </button>
  );
};

export default Button;
