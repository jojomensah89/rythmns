import React from "react";
import { create } from "zustand";

type SubscribeModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// create a global state for Subscribe modal triggers

const useSubscribeModal = create<SubscribeModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSubscribeModal;
