import { generateStocks } from "@/lib/generateStocks";
import StockTable from "@/components/StockTable";
import FilterStatus from "@/components/FilterStatus";
export default function Home() {
  const stocks = generateStocks(5000)
  return(
      <main>
        <h1 className="font-bold text-3xl p-4">Stock Screener</h1>
        <FilterStatus />
        <StockTable stocks={stocks}/>
      </main>
  )
  
}
