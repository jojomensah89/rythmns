"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-hot-toast";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

type Props = {
  songId: string;
};

const LikeButton = ({ songId }: Props) => {
  const [isLiked, setisLiked] = useState(false);
  const router = useRouter();
  const { supabaseClient } = useSessionContext();
  const AuthModal = useAuthModal();
  const { user } = useUser();

  useEffect(() => {
    if (!user?.id) {
      return;
    }
    const checkSongStatus = async () => {
      const { data, error } = await supabaseClient
        .from("liked_songs")
        .select("*")
        .eq("user_id", user.id)
        .eq("song_id", songId)
        .single();

      if (!error && data) {
        setisLiked(true);
      }
    };
    checkSongStatus();
  }, [user, supabaseClient, songId]);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = async () => {
    if (!user) {
      return AuthModal.onOpen();
    }
    if (isLiked) {
      const { error } = await supabaseClient
        .from("liked_songs")
        .delete()
        .eq("user_id", user.id)
        .eq("song_id", songId);

      if (error) {
        toast.error(error.message);
      } else {
        setisLiked(false);
      }
    } else {
      const { error } = await supabaseClient
        .from("liked_songs")
        .insert({ song_id: songId, user_id: user.id });

      if (error) {
        toast.error(error.message);
      } else {
        setisLiked(true);
        toast.success("Liked!");
      }
    }
    router.refresh();
  };

  return (
    <button className="hover:opacity-75 transition" onClick={handleLike}>
      <Icon color={isLiked ? "#22c55e" : "white"} size={25} />
    </button>
  );
};

export default LikeButton;
