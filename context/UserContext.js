import { create } from "zustand";
import {persist} from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
            getStorage: () => AsyncStorage
        }
    )
);