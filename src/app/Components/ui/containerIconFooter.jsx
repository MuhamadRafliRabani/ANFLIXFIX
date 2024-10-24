"use client";
import {
  DiscordLogo,
  InstagramLogo,
  TelegramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import IconFooter from "./iconFooter";

const ContainerIconFooter = () => {
  return (
    <div className="flex items-center space-x-2">
      <IconFooter
        icon={<TelegramLogo fill="bold" fontWeight="500" size={16} />}
        label="Telegram"
        url="/"
      />
      <IconFooter
        icon={<DiscordLogo fill="bold" fontWeight="500" size={16} />}
        label="Discord"
        url="/"
      />
      <IconFooter
        icon={<YoutubeLogo fill="bold" fontWeight="500" size={16} />}
        label="Youtube"
        url="/"
      />
      <IconFooter
        icon={<InstagramLogo fill="bold" fontWeight="500" size={16} />}
        label="Instagram"
        url="/"
      />
    </div>
  );
};

export default ContainerIconFooter;
