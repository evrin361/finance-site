import { Candle } from "@/lib/normalizer/normalizeCandle";

export function detectOrderBlocks(
  candles: Candle[],
  liquidity: {
    buySideLiquidity: string[];
    sellSideLiquidity: string[];
  }
) {

  const bullishOrderBlocks: string[] = [];
  const bearishOrderBlocks: string[] = [];

  const last10 = candles.slice(-10);

  last10.forEach((candle, index) => {

    if (candle.close > candle.open) {

      bullishOrderBlocks.push(
        `Bullish Order Block near candle ${
          candles.length - 10 + index
        }`
      );

    }

    if (candle.close < candle.open) {

      bearishOrderBlocks.push(
        `Bearish Order Block near candle ${
          candles.length - 10 + index
        }`
      );

    }

  });

  return {
    bullishOrderBlocks,
    bearishOrderBlocks,
  };

}