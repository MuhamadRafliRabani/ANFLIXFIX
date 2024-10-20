"use client";

import { cn } from "@/libs/cn";

const Button = ({ action, black, text, icon }) => {
  return (
    <button
      onClick={action}
      className={cn(
        "rounded-lg bg-second_color px-3 py-2 text-xs font-medium text-black shadow-sm",
        {
          "bg-primary_color text-white": black,
        },
      )}
    >
      <p className="flex flex-1 items-center gap-1">
        {icon} {text}
      </p>
    </button>
  );
};

export default Button;
