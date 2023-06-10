'use client';

import Image from "next/image";
import useLoadImage from "@/app/hooks/useLoadImage";
import { Song } from "@/types";
import React from "react"

interface SongItemProps {
    data: Song;
    onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({
    data,
    onClick
}) => {
    const imagePath = useLoadImage(data)
  return (
    <div onClick={() => onClick(data.id)} className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 cursor-pointer hover:bg-neutral-400/10 transition p-3 bg-neutral-400/5 ">
        <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
            <Image
            className="object-cover" src={imagePath || '/image/liked.png'} fill alt="Image"
            />
        </div>
    </div>
  )
};

export default SongItem;
