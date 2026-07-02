import { IDataProvider } from "./IDataProvider";
import { Candle } from "@/lib/types/Candle";

export class MockProvider implements IDataProvider {
  async getCandles(
    symbol: string,
    timeframe: string,
    limit: number
  ): Promise<Candle[]> {

    const candles: Candle[] = [];

    let price = 100;

    for (let i = 0; i < limit; i++) {

      const open = price;

      const close =
        open + (Math.random() - 0.5) * 4;

      const high =
        Math.max(open, close) +
        Math.random() * 2;

      const low =
        Math.min(open, close) -
        Math.random() * 2;

candles.push({
  timestamp: Date.now() + i * 60000,

  open,

  high,

  low,

  close,

  volume:
    Math.random() * 1000,
});
      price = close;
    }

    return candles;
  }
}