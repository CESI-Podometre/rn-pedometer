import { create } from "zustand";
import {persist} from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useNewsContext = create(
    persist(
        (set) => ({
            news: [],
            setNews: (news) => set({ news }),
            addNews: (news) => set((state) => ({ news: [...state.news, news] })),
            removeNews: (news) => set((state) => ({ news: state.news.filter((n) => n.id !== news.id) })),
            updateNews: (news) => set((state) => ({ news: state.news.map((n) => (n.id === news.id ? news : n)) })),
            clearNews: () => set({ news: [] }),
        }),
        {
            name: "news-storage",
            getStorage: () => AsyncStorage
        }
    )
);