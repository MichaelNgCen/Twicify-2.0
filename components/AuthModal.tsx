"use client";

import React from "react";
import Modal from "./Modal";

const AuthModal = () => {
  return (
    <div>
      <Modal
        title="Welcome Back"
        description="Login to your account"
        isOpen
        onChange={() => {}}
      >
        Auth Modal Children
      </Modal>
    </div>
  );
};

export default AuthModal;
