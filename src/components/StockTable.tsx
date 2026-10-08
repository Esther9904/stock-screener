"use client";
import { Stock } from "@/types/stock";
import { useRef } from "react";
import StockRow from "@/components/StockRow"
import { useVirtualizer } from "@tanstack/react-virtual";
interface StockTableProps {
    stocks: Stock[]
}

export default function StockTable({ stocks }: StockTableProps){
    const parentRef = useRef<HTMLDivElement>(null)
    const rowVirtualizer = useVirtualizer({
        count: stocks.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 40,
        overscan: 5,
    })

    return(
        <div ref={parentRef} className="h-[600px] overflow-auto">
            <div style={{ height: rowVirtualizer.getTotalSize(), position: "relative"}}>
                {rowVirtualizer.getVirtualItems().map((virtualItem) => (
                    <div
                        key={virtualItem.key}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: virtualItem.size,
                            transform: `translateY(${virtualItem.start}px)`,
                        }}
                    >
                        <StockRow stock={stocks[virtualItem.index]} />
                    </div>
                ))}
            </div>
        </div>
    )
}

