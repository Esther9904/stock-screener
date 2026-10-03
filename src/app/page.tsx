import { generateStocks } from "@/lib/generateStocks";
import StockTable from "@/components/StockTable";
export default function Home() {
  const stocks = generateStocks(5000)
  return(
      <main>
        <h1 className="font-bold text-3xl p-4">Stock Screener</h1>
      
        {/* <ul>
          {stocks.map((stock) => (
            <StockRow key={stock.tickerSymbol} stock={stock} />
          ))}
        </ul> */}
        <StockTable stocks={stocks}/>
      </main>
  )
  
}
