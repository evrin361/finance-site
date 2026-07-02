import { Candle } from "@/lib/types/Candle";

export interface IDataProvider {
  getCandles(
    symbol: string,
    timeframe: string,
    limit: number
  ): Promise<Candle[]>;
}