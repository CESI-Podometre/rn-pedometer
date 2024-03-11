import { create } from "zustand";
import {persist} from "zustand/middleware";

export const useChallengeContext = create(
    persist(
        (set) => ({
            challenge: [],
            setChallenge: (challenge) => set({ challenge }),
            addChallenge: (challenge) => set((state) => ({ challenge: [...state.challenge, challenge] })),
            removeChallenge: (challenge) => set((state) => ({ challenge: state.challenge.filter((c) => c.id !== challenge.id) })),
            updateChallenge: (challenge) => set((state) => ({ challenge: state.challenge.map((c) => (c.id === challenge.id ? challenge : c)) })),
            clearChallenge: () => set({ challenge: [] }),
        }),
        {
            name: "challenge-storage",
            storage: localStorage
        }
    )
);