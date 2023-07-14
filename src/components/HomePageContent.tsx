"use client";
import React from "react";
import { Song } from "@/types/stripe";
import SongItem from "./SongItem";
import useOnPlay from "@/hooks/useOnPlay";

type Props = {
  songs: Song[];
};

const HomePageContent = ({ songs }: Props) => {
  const onPlay = useOnPlay(songs);
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available</div>;
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          onClick={(id) => {
            onPlay(id);
          }}
          song={song}
        />
      ))}{" "}
    </div>
  );
};

export default HomePageContent;
