import { create } from "zustand";
import { Stock } from "@/types/stock";

interface ScreenerState {
    globalFilter: string
    setGlobalFilter: (value: string) => void
    stocks: Stock[]
    setStocks: (value: Stock[]) => void
}

export const useScreenerStore = create<ScreenerState>((set) => ({
    globalFilter: "",
    setGlobalFilter: (value) => set({globalFilter: value}),
    stocks: [],
    setStocks: (value) => set({stocks: value})
}))