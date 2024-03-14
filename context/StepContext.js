import { create } from "zustand";
import {persist} from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStepContext = create(
    persist(
        (set) => ({
            step: 0,
            setStep: (step) => set({ step }),
        }),
        {
            name: "step-storage",
            getStorage: () => AsyncStorage
        }
    )
);