"use client";
import { useScreenerStore } from "@/store/screenerStore";

export default function FilterStatus() {
    const globalFilter = useScreenerStore((state) => state.globalFilter)

    return (
        <p className="px-4 pb-2 text-sm text-gray-600">
            {globalFilter === "" ? "Showing all stocks" : `Searching for: ${globalFilter}`}
        </p>
    )
}