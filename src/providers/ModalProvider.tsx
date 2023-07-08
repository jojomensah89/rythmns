"use client";

import React, { useState, useEffect } from "react";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

// create a modal Provider for all the Modals

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Modals can only be triggered after the component has been  to resolve hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
