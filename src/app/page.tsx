import { mockStocks } from "@/data/mockStocks";
import StockRow from "@/components/StockRow";
import { generateStocks } from "@/lib/generateStocks";
export default function Home() {
  const stocks = generateStocks(20)
  return(
      <main>
        <h1 className="font-bold text-3xl p-4">Stock Screener</h1>
      
        <ul>
          {stocks.map((stock) => (
            <StockRow key={stock.tickerSymbol} stock={stock} />
          ))}
        </ul>
      </main>
  )
  
}
