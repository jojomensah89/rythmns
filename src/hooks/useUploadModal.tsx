import React from "react";
import { create } from "zustand";

type UploadModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// create a global state for upload modal triggers

const useUploadModal = create<UploadModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;
