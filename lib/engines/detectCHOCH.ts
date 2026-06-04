import { Candle } from "@/lib/normalizer/normalizeCandle";

export function detectCHOCH(
  candles: Candle[]
): string[] {

  const choch: string[] = [];

  for (let i = 3; i < candles.length; i++) {

    const prevHigh =
      candles[i - 1].high;

    const prevLow =
      candles[i - 1].low;

    const currentClose =
      candles[i].close;

    const previousClose =
      candles[i - 1].close;

    if (
      previousClose < prevLow &&
      currentClose > prevHigh
    ) {

      choch.push(
        `Bullish CHOCH at candle ${i}`
      );

    }

    if (
      previousClose > prevHigh &&
      currentClose < prevLow
    ) {

      choch.push(
        `Bearish CHOCH at candle ${i}`
      );

    }

  }

  return choch;

}