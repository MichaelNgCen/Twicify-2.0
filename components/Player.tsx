'use client';

import useGetSongsById from "@/app/hooks/useGetSongById";
import usePlayer from "@/app/hooks/usePlayer";
import React from "react"

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongsById(player.activeId);


  return (
    <div>
      PLAYER
    </div>
  )
};

export default Player;
