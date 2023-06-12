"use client";

import useGetSongsById from "@/app/hooks/useGetSongById";
import useLoadSongUrl from "@/app/hooks/useLoadSongUrl";
import usePlayer from "@/app/hooks/usePlayer";
import React from "react";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongsById(player.activeId);

  const songUrl = useLoadSongUrl;

  return <div>PLAYER</div>;
};

export default Player;
