import { create } from "zustand"

interface ScreenerState {
    globalFilter: string
    setGlobalFilter: (value: string) => void
}

export const useScreenerStore = create<ScreenerState>((set) => ({
    globalFilter: "",
    setGlobalFilter: (value) => set({globalFilter: value})
}))