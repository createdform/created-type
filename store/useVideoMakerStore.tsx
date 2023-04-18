import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Mode = "Light-mode" | "Autumn-mode" | "Dark-mode";

export interface ComponentState {
  text: string;
  speed: number;
  duration:number;
  backgroundColor: string;
  mode: Mode,
  setText: (text: string) => void,
  setSpeed: (speed: number) => void,
  setDuration: (duration: number) => void,
  setMode: (modes: Mode) => void,
}

const useVideoMakerStore = create<ComponentState>()((set) => ({
  text: "Make an animated text video!          3 different themes to choose from.",
  speed: 100,
  duration: 400,
  backgroundColor: "white",
  mode: "Light-mode",
  setText: (text: string) => set((state: ComponentState) => ({ ...state, text })),
  setSpeed: (speed: number) => set((state: ComponentState) => ({ ...state, speed })),
  setDuration: (duration: number) => set((state: ComponentState) => ({ ...state, duration })),
  setMode: (mode: Mode) => set((state: ComponentState) => ({ ...state, mode })),
}) )

export default useVideoMakerStore;
