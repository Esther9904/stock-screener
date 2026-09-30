import { Stock } from "@/types/stock"

export const mockStocks : Stock[] = [
    {
        tickerSymbol: "AAPL",
        company: "Apple",
        currentPrice: 189.50,
        percentPriceChange: 2,
        tradingVolume: 900_300_000,
    },
    {
        tickerSymbol: "MSFT",
        company: "Microsoft",
        currentPrice: 412.30,
        percentPriceChange: -2.5,
        tradingVolume: 800_200_000,
    },
    {
        tickerSymbol: "AMZN",
        company: "Amazon",
        currentPrice: 300.80,
        percentPriceChange: 1,
        tradingVolume: 600_500_000,
    },
    {
        tickerSymbol: "TSLA",
        company: "Tesla",
        currentPrice: 600.76,
        percentPriceChange: -1.5,
        tradingVolume: 400_700_000,
    },
    {
        tickerSymbol: "NFLX",
        company: "Netflix",
        currentPrice: 100.87,
        percentPriceChange: 0.5,
        tradingVolume: 700_800_000,
    },
]