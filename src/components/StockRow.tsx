import { Stock } from "@/types/stock"
interface StockRowProps {
    stock: Stock
}

export default function StockRow({ stock }: StockRowProps){
    return(
        <li>{stock.tickerSymbol} {stock.company} ${stock.currentPrice.toFixed(2)}</li>
    )
}