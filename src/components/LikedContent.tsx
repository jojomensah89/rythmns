"use client";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types/stripe";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";
import useOnPlay from "@/hooks/useOnPlay";

type Props = {
  songs: Song[];
};

const LikedContent = ({ songs }: Props) => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const onPlay = useOnPlay(songs);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [user, isLoading, router]);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col w-full px-6 text-neutral-400 gap-y-2">
        {songs.map((song) => (
          <div className="flex items-center w-full gap-x-4" key={song.id}>
            <div className="flex-1">
              <MediaItem onClick={() => {}} song={song} />
            </div>
            <LikeButton songId={song.id} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full px-6 text-neutral-400 gap-y-2">
      {songs.map((song) => (
        <div className="flex items-center w-full gap-x-4" key={song.id}>
          <div className="flex-1">
            <MediaItem onClick={(id: string) => onPlay(id)} song={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
