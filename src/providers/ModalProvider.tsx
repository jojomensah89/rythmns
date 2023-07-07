"use client";

import React, { useState, useEffect } from "react";

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import { title } from "process";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
   
    </>
  );
};

export default ModalProvider;
