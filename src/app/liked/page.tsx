import getLikedSongsByUser from "@/actions/getLikedSongsByUser";
import Header from "@/components/Header";
import LikedContent from "@/components/LikedContent";
import Image from "next/image";
import React from "react";
import Likepng from "/public/liked.png";

export const revalidate = 0;

const Like = async () => {
  const songs = await getLikedSongsByUser();
  console.log(songs);
  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto bg-neutral-900">
      <Header>
        <div>
          <div className="flex flex-col items-center md:flex-row gap-x-5">
            <div className="relative w-32 h-32 lg:h-44 lg-44">
              <Image
                fill
                src={Likepng || "/public/liked.png"}
                alt="Playlist"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col mt-4 gap-y-2 md:mt-0">
              <p className="hidden text-sm font-semibold md:block">Playlist</p>
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
                Liked Songs
              </h1>
            </div>
          </div>
        </div>
      </Header>
      {/* <LikedContent songs={songs} /> */}
    </div>
  );
};

export default Like;
