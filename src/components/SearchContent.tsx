"use client";
import { Song } from "@/types/stripe";
import React from "react";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";

type Props = {
  songs: Song[];
};

const SearchContent = ({ songs }: Props) => {
  if (songs.length === 0) {
    return (
      <div className="w-full text-neutral-400 flex flex-col gap-y-2 px-6">
        No songs found
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div className="flex items-center gap-x-4 w-full" key={song.id}>
          <div className="flex-1">
            <MediaItem onClick={() => {}} song={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
