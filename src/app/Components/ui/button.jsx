"use client";

import { cn } from "@/libs/cn";

const Button = ({ action, black, text }) => {
  return (
    <button
      onClick={action}
      className={cn(
        "rounded-lg bg-second_color px-4 py-2 text-xs font-medium text-black shadow-sm",
        {
          "rounded-lg bg-primary_color px-4 py-2 text-xs font-medium text-white shadow-sm":
            black,
        },
      )}
    >
      <p className="">{text}</p>
    </button>
  );
};

export default Button;
