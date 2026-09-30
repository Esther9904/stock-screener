import { mockStocks } from "@/data/mockStocks"
export default function Home() {
  return(
      <main>
        <h1 className="font-bold text-3xl p-4">Stock Screener</h1>
      
        <ul>
          {mockStocks.map((stock) => (
            <li key={stock.tickerSymbol}>{stock.tickerSymbol} {stock.company} ${stock.currentPrice.toFixed(2)}</li>
          ))}
        </ul>
      </main>
  )
  
}
