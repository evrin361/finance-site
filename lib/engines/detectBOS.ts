import { Candle } from "@/lib/normalizer/normalizeCandle";

export function detectBOS(
  candles: Candle[]
): string[] {

  const bos: string[] = [];

  for (let i = 2; i < candles.length; i++) {

    const prevHigh =
      candles[i - 1].high;

    const prevLow =
      candles[i - 1].low;

    const currentClose =
      candles[i].close;

    if (currentClose > prevHigh) {

      bos.push(
        `Bullish BOS at candle ${i}`
      );

    }

    if (currentClose < prevLow) {

      bos.push(
        `Bearish BOS at candle ${i}`
      );

    }

  }

  return bos;

}