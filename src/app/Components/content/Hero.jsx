"use client";
import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";

const Hero = ({ anime }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      setIsVideoReady(true); // Pastikan video element ada di DOM
    }
  }, []);

  useEffect(() => {
    if (isVideoReady && videoRef.current && !playerRef.current) {
      playerRef.current = videojs(videoRef.current, {
        techOrder: ["youtube"],
        sources: [
          {
            src: `https://www.youtube.com/watch?v=${anime.trailer.youtube_id}`, // Sesuaikan ID video
            type: "video/youtube",
          },
        ],
        youtube: {
          modestbranding: 1,
          rel: 0,
        },
        fluid: false,
        controls: false,
        autoplay: true,
        loop: true,
        muted: true,
        volume: 0,
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [isVideoReady]); // Tunggu sampai video element ada di DOM

  return (
    <div className="relative flex h-full w-full justify-normal">
      {/* Video element */}
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered h-full w-full bg-white"
      />
      {/* Judul anime */}
      <h1 className="absolute bottom-0 text-3xl font-bold text-white">
        {anime?.title_english}
      </h1>
    </div>
  );
};

export default Hero;
