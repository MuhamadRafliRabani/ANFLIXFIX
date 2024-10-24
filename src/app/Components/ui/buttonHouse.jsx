"use client";
import { BookmarkSimple, Play } from "@phosphor-icons/react";
import Button from "./button";

const ButtonHouse = () => {
  return (
    <div className="space-x-2">
      <Button text="Watch" icon={<Play size={14} />} />
      <Button text="Collection" icon={<BookmarkSimple size={16} />} black />
    </div>
  );
};

export default ButtonHouse;
