"use client";

import Modal from "@/components/Modal";
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
      <Modal
        title="Test Modal"
        description="Test Description"
        isOpen
        onChange={() => {}}
      >
        test children
      </Modal>
    </div>
  );
};

export default ModalProvider;
