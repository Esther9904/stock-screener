"use client";
import { Stock } from "@/types/stock";
import { useRef } from "react";
interface StockTableProps {
    stocks: Stock[]
}

export default function StockTable({ stocks }: StockTableProps){
    const parentRef = useRef<HTMLDivElement>(null)
    return(
        <div ref={parentRef} className="h-[600px] overflow-auto">
            <p>{stocks.length} stocks</p>
        </div>
    )
}

