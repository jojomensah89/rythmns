import React from "react";
import { Song } from "@/types/stripe";

type Props = {
  song: Song;
  onClick: () => void;
};

const SongItem = ({ song }: Props) => {
  return <div>SongItem</div>;
};

export default SongItem;
