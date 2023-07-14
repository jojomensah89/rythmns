"use client";

import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types/stripe";
import Image from "next/image";
import React from "react";

type Props = {
  song: Song;
  onClick?: (id: string) => void;
};

const MediaItem = ({ song, onClick }: Props) => {
  const imageUrl = useLoadImage(song);
  const player = usePlayer();
  const handleClick = () => {
    if (onClick) {
      return onClick(song.id);
    }

    // Todo: default turn on player
    player.setId(song.id);
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-center w-full p-2 rounded-md cursor-pointer gap-x-3 hover:bg-neutral-800/50"
    >
      <div
        className="  relative 
          rounded-md 
          min-h-[48px] 
          min-w-[48px] 
          overflow-hidden"
      >
        <Image
          src={imageUrl || "/public/liked.png"}
          alt={song.title}
          className="object-cover"
          fill
        />
      </div>
      <div className="flex flex-col overflow-hidden gap-y-1">
        <p className="text-white truncate">{song.title}</p>
        <p className="text-sm truncate text-neutral-400">{song.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
