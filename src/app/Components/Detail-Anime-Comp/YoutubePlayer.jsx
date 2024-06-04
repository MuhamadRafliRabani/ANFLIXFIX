"use client";
import { X } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";
const YoutubePlayer = ({ dataAnime }) => {
  const [isOpen, setIsOpen] = useState(true);

  const option = {
    width: 400,
    height: 300,
  };

  const handleYoutubePlayer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 ">
      <div onClick={handleYoutubePlayer}>
        <X className="w-10 h-10 text-white cursor-pointer effect-btn" />
      </div>
      <div className={`${isOpen ? "" : "hidden"}`}>
        <YouTube
          videoId={dataAnime.trailer.youtube_id}
          opts={option}
          onReady={(event) => event.target.pauseVideo()}
          onPlay={(event) =>
            isOpen === false ? event.target.stopVideo() : event
          }
        />
      </div>
    </div>
  );
};

export default YoutubePlayer;
