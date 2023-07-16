import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types/stripe";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import useSubscribeModal from "@/hooks/useSubscribeModal";

type Props = {
  userSongs: Song[];
};

const Library = ({ userSongs }: Props) => {
  const subscribeModal = useSubscribeModal();
  const AuthModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user, subscription } = useUser();
  const onplay = useOnPlay(userSongs);
  const handleClick = () => {
    // check for user session
    if (!user) {
      return AuthModal.onOpen();
    }
    //check for subscription
    if (!subscription) {
      return subscribeModal.onOpen();
    }

    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="font-medium text-neutral-400 text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          size={20}
          onClick={handleClick}
          className="transition cursor-pointer text-neutral-400 hover:text-white"
        />
      </div>
      <div className="flex flex-col px-3 mt-4 gap-y-2">
        {userSongs.map((song) => (
          <MediaItem
            key={song.id}
            onClick={(id: string) => onplay(id)}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
