import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...className) {
  return twMerge(clsx(className));
}
