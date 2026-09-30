import { mockStocks } from "@/data/mockStocks";
import StockRow from "@/components/StockRow"
export default function Home() {
  return(
      <main>
        <h1 className="font-bold text-3xl p-4">Stock Screener</h1>
      
        <ul>
          {mockStocks.map((stock) => (
            <StockRow key={stock.tickerSymbol} stock={stock} />
          ))}
        </ul>
      </main>
  )
  
}
