import { Stock } from "@/types/stock"
interface StockRowProps {
    stock: Stock
}

export default function StockRow({ stock }: StockRowProps){
    return(
        <div className="grid grid-cols-4 px-4 py-2">
            <span>{stock.tickerSymbol}</span>
            <span>{stock.company}</span>
            <span className="text-right">${stock.currentPrice.toFixed(2)}</span>
            <span className={`text-right ${stock.percentPriceChange >= 0 ? "text-green-600" : "text-red-600"}`}>{stock.percentPriceChange.toFixed(2)}%</span>
        </div>
    
    )
}