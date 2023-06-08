import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/app/hooks/useAuthModal";
import { useUser } from "@/app/hooks/useUser";

const Library = () => {
  const AuthModal = useAuthModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      AuthModal.onOpen();
    }
  };
  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neautral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-netural-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of songs!</div>
    </div>
  );
};

export default Library;