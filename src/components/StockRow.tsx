import { Stock } from "@/types/stock"
interface StockRowProps {
    stock: Stock
}

export default function StockRow({ stock }: StockRowProps){
    return(
        <li className="grid grid-cols-3 px-4 py-2">
            <span>{stock.tickerSymbol}</span>
            <span>{stock.company}</span>
            <span className="text-right">${stock.currentPrice.toFixed(2)}</span>
        </li>
    
    )
}