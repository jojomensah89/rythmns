import { create } from "zustand";

interface VolumeType {
  volume: number;
  setVolume: (id: number) => void;
}

const useVolume = create<VolumeType>((set) => ({
  volume: 0.5,
  setVolume: (value: number) => set({ volume: value }),
}));

export default useVolume;
