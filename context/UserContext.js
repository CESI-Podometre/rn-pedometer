import { create } from "zustand";
import {persist} from "zustand/middleware";

export const useUserContext = create(
    persist(
        (set) => ({
            userId: "",
            setUserId: (userId) => set({ userId }),
            removeUserId: () => set({ userId: "" }),

            userImage: "../assets/Avatars/astro_blue.png",
            setUserImage: (userImage) => set({ userImage }),
        }),
        {
            name: "user-storage",
            // storage: localStorage
        }
    )
);