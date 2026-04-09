import { create } from 'zustand';

interface AppState {
  activeDivision: string | null;
  setActiveDivision: (id: string | null) => void;
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  activeDivision: null,
  setActiveDivision: (id) => set({ activeDivision: id }),
  isMenuOpen: false,
  setMenuOpen: (open) => set({ isMenuOpen: open }),
}));