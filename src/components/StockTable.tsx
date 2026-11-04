"use client";
import { Stock } from "@/types/stock";
import { useRef, useState } from "react";
import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender, SortingState } from "@tanstack/react-table";
import { stockColumns } from "@/components/columns";
import StockRow from "@/components/StockRow"
import { useVirtualizer } from "@tanstack/react-virtual";
interface StockTableProps {
    stocks: Stock[]
}

export default function StockTable({ stocks }: StockTableProps){
    const parentRef = useRef<HTMLDivElement>(null)
    const [sorting, setSorting] = useState<SortingState>([{ id: "currentPrice", desc: true }])
    const table = useReactTable({
        data: stocks,
        columns: stockColumns,
        getCoreRowModel: getCoreRowModel(),
        state: { sorting},
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
    })
    const { rows } = table.getRowModel()

    const rightAlignedColumns = ["currentPrice", "percentPriceChange", "tradingVolume"]

    const rowVirtualizer = useVirtualizer({
        count: rows.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 40,
        overscan: 5,
    })


    return(
        <div ref={parentRef} className="h-[600px] overflow-auto">
            {table.getHeaderGroups().map((headerGroup) => (
                <div key={headerGroup.id} className="grid grid-cols-5 px-4 py-2 font-bold sticky top-0 z-10 bg-white">
                    {headerGroup.headers.map((header) => (
                        <span
                            key={header.id}
                            onClick={header.column.getToggleSortingHandler()}
                            className={`cursor-pointer select-none ${rightAlignedColumns.includes(header.column.id) ? "text-right" : ""}`}
                        >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {header.column.getIsSorted() === "asc" && "↑"}
                            {header.column.getIsSorted() === "desc" && "↓"}
                        </span>
                    ))}
                </div>
            ))}
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
                        <StockRow stock={rows[virtualItem.index].original} />
                    </div>
                ))}
            </div>
        </div>
    )
}

