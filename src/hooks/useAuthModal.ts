import React from "react";
import { create } from "zustand";

type AuthModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// create a global state for auth modal triggers 

const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
