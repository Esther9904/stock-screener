"use client";
import { useEffect } from "react";
import { generateStocks } from "@/lib/generateStocks";
import { useScreenerStore } from "@/store/screenerStore";

export default function StockDataLoader() {
    const setStocks = useScreenerStore((state) => state.setStocks);

    useEffect(() => {
        setStocks(generateStocks(5000))
    }, [setStocks])

    return null;
}