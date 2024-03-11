import { create } from "zustand";
import {persist} from "zustand/middleware";

export const useStepContext = create(
    persist(
        (set) => ({
            step: 0,
            setStep: (step) => set({ step }),
        }),
        {
            name: "step-storage",
            storage: localStorage
        }
    )
);