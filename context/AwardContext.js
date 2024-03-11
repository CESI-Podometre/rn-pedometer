import { create } from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

export const useAwardContext = create(
    persist(
        (set) => ({
            award: [],
            setAward: (award) => set({ award }),
            addAward: (award) => set((state) => ({ award: [...state.award, award] })),
            removeAward: (award) => set((state) => ({ award: state.award.filter((a) => a.id !== award.id) })),
            updateAward: (award) => set((state) => ({ award: state.award.map((a) => (a.id === award.id ? award : a)) })),
            clearAward: () => set({ award: [] }),
        }),
        {
            name: "award-storage",
            storage: createJSONStorage(() => localStorage)
        }
    )
);