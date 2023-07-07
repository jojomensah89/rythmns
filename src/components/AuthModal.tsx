"use client";

import React from "react";
import Modal from "./Modal";

type Props = {};

const AuthModal = (props: Props) => {
  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen
      onChange={() => {}}
    >
      AuthModal children
    </Modal>
  );
};

export default AuthModal;
