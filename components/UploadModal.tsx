"use client";

import React from "react";
import Modal from "./Modal";
import useUploadModal from "@/app/hooks/useUploadModal";

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const onChange = () => {
    if (!open) {
      uploadModal.onClose();
    }
  };
  return (
    <Modal
      title="Upload Modal Title"
      description="Upload Modal Description"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Upload Content
    </Modal>
  );
};

export default UploadModal;
