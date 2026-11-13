import StockTable from "@/components/StockTable";
import FilterStatus from "@/components/FilterStatus";
import StockDataLoader from "@/components/StockDataLoader";
export default function Home() {
  return(
      <main>
        <StockDataLoader />
        <h1 className="font-bold text-3xl p-4">Stock Screener</h1>
        <FilterStatus />
        <StockTable />
      </main>
  )
  
}
