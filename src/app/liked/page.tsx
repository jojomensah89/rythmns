import getLikedSongsByUser from "@/actions/getLikedSongsByUser";
import Header from "@/components/Header";
import LikedContent from "@/components/LikedContent";
import Image from "next/image";
import React from "react";

export const revalidate = 0;

const Like = async () => {
  const songs = await getLikedSongsByUser();
  return (
    <div className="h-full w-full bg-neutral-900 overflow-hidden overflow-y-auto">
      <Header>
        <div>
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="relative h-32 w-32 lg:h-44 lg-44">
              <Image
                fill
                src="/public/liked.png"
                alt="Playlist"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden md:block font-semibold text-sm">Playlist</p>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
                Liked Songs
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} />
    </div>
  );
};

export default Like;
