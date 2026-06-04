import { Candle } from "@/lib/normalizer/normalizeCandle";

export interface MarketStructureResult {
  marketStructure: string;
  higherHighs: number;
  higherLows: number;
  lowerHighs: number;
  lowerLows: number;
  description: string;
}

export function detectMarketStructure(
  candles: Candle[]
): MarketStructureResult {

  const recentCandles = candles.slice(-20);

  let higherHighs = 0;
  let higherLows = 0;

  let lowerHighs = 0;
  let lowerLows = 0;

  for (let i = 1; i < recentCandles.length; i++) {

    const current = recentCandles[i];
    const previous = recentCandles[i - 1];

    // Higher High
    if (current.high > previous.high) {
      higherHighs++;
    }

    // Lower High
    if (current.high < previous.high) {
      lowerHighs++;
    }

    // Higher Low
    if (current.low > previous.low) {
      higherLows++;
    }

    // Lower Low
    if (current.low < previous.low) {
      lowerLows++;
    }
  }

  let marketStructure = "Range";
  let description = "Market is moving sideways";

  if (
    higherHighs > lowerHighs &&
    higherLows > lowerLows
  ) {
    marketStructure = "Bullish";
    description =
      "Market is creating higher highs and higher lows";
  }

  if (
    lowerHighs > higherHighs &&
    lowerLows > higherLows
  ) {
    marketStructure = "Bearish";
    description =
      "Market is creating lower highs and lower lows";
  }

  return {
    marketStructure,
    higherHighs,
    higherLows,
    lowerHighs,
    lowerLows,
    description,
  };
}