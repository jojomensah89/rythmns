import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types/stripe";
import MediaItem from "./MediaItem";

type Props = {
  userSongs: Song[];
};

const Library = ({ userSongs }: Props) => {
  const AuthModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const handleClick = () => {
    // check for user session
    if (!user) {
      return AuthModal.onOpen();
    }
    //check for subscription

    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          size={20}
          onClick={handleClick}
          className="cursor-pointer text-neutral-400 hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {userSongs.map((song) => (
          <MediaItem key={song.id} onClick={() => {}} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
