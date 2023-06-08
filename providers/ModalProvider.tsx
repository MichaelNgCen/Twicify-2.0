"use client";

import AuthModal from "@/components/AuthModal";
import React, { useEffect } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <AuthModal />
    </div>
  );
};

export default ModalProvider;
