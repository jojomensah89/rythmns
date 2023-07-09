"use client";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types/stripe";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";

type Props = {
  songs: Song[];
};

const LikedContent = ({ songs }: Props) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [user, isLoading, router]);

  if (songs.length === 0) {
    return (
      <div className="w-full text-neutral-400 flex flex-col gap-y-2 px-6">
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
  }
  return <div className="flex flex-col gap-y-2 w-full px-6">LikedContent</div>;
};

export default LikedContent;
