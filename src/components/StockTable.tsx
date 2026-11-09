"use client";
import { Stock } from "@/types/stock";
import { useRef, useState } from "react";
import { useScreenerStore } from "@/store/screenerStore";
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, flexRender, SortingState } from "@tanstack/react-table";
import { stockColumns } from "@/components/columns";
import StockRow from "@/components/StockRow"
import { useVirtualizer } from "@tanstack/react-virtual";
interface StockTableProps {
    stocks: Stock[]
}

export default function StockTable({ stocks }: StockTableProps){
    const parentRef = useRef<HTMLDivElement>(null)
    const [sorting, setSorting] = useState<SortingState>([{ id: "currentPrice", desc: true }]);
    const globalFilter = useScreenerStore((state) => state.globalFilter);
    const setGlobalFilter = useScreenerStore((state) => state.setGlobalFilter);
    const table = useReactTable({
        data: stocks,
        columns: stockColumns,
        getCoreRowModel: getCoreRowModel(),
        state: { sorting, globalFilter },
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel(),
    })
    const { rows } = table.getRowModel();
    
    const rightAlignedColumns = ["currentPrice", "percentPriceChange", "tradingVolume"]

    const rowVirtualizer = useVirtualizer({
        count: rows.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 40,
        overscan: 5,
    })


    return(
        <div>
            <input
                value={globalFilter}
                onChange={(event) => setGlobalFilter(event.target.value)}
                placeholder="Search ticker or company"
                className="mb-2 w-full max-w-sm rounded border border-gray-300 px-3 py-2"
            />
            <p className="mb-2 text-sm text-gray-600">{rows.length} of {stocks.length} stocks</p>
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
                {rows.length === 0 && (
                    <p className="p-4 text-center text-gray-500">No stocks match "{globalFilter}"</p>
                )}

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
        </div>
    )
}

