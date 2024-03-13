import { create } from "zustand";
import {persist} from "zustand/middleware";

export const useUserContext = create(
    persist(
        (set) => ({
            userToken: "",
            setUserToken: (userToken) => set({ userToken }),
            removeUserToken: () => set({ userToken: "" }),

            userImage: "../assets/Avatars/astro_blue.png",
            setUserImage: (userImage) => set({ userImage }),
        }),
        {
            name: "user-storage",
            // storage: localStorage
        }
    )
);