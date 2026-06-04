import { Candle } from "@/lib/normalizer/normalizeCandle";

export function detectFVG(
  candles: Candle[]
): string[] {

  const fvgZones: string[] = [];

  for (let i = 2; i < candles.length; i++) {

    const candle1 = candles[i - 2];
    const candle3 = candles[i];

    // Bullish FVG

    if (candle3.low > candle1.high) {

      fvgZones.push(
        `Bullish FVG between ${candle1.high} and ${candle3.low} at candle ${i}`
      );

    }

    // Bearish FVG

    if (candle3.high < candle1.low) {

      fvgZones.push(
        `Bearish FVG between ${candle3.high} and ${candle1.low} at candle ${i}`
      );

    }

  }

  return fvgZones;

}