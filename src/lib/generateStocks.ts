import { Stock } from "@/types/stock";

export function generateStocks(count: number): Stock[]{
    const stocks : Stock[] = []

    for(let i = 0; i < count; i++){
        stocks.push({
            tickerSymbol: `STK-${i}`,
            company: `company-${i}`,
            currentPrice: Math.round((10 + Math.random() * (500-10)) * 100 )/100,
            percentPriceChange: Math.round((-5 + Math.random() * (5-(-5))) *100)/100,
            tradingVolume: Math.round(Math.random() * 10000000)
        })
    }
    return stocks

}