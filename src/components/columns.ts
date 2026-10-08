import { createColumnHelper } from "@tanstack/react-table"
import { Stock } from "@/types/stock";

const columnHelper = createColumnHelper<Stock>()

export const stockColumns = [
    columnHelper.accessor("tickerSymbol", { header: "Ticker"}),
    columnHelper.accessor("company", { header: "Company"}),
    columnHelper.accessor("currentPrice", { header: "Price"}),
    columnHelper.accessor("percentPriceChange", { header: "Price Change"}),
    columnHelper.accessor("tradingVolume", { header: "Trading Volume"})
]