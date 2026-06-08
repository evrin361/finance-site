import { MACD } from "technicalindicators";

interface MACDResult {
  macd: number;
  signal: number;
  histogram: number;
  trend: "bullish" | "bearish" | "neutral";
}

export function calculateMACD(
  prices: number[],
  fastPeriod: number = 12,
  slowPeriod: number = 26,
  signalPeriod: number = 9
): MACDResult | null {
  const result = MACD.calculate({
    values: prices,
    fastPeriod,
    slowPeriod,
    signalPeriod,
    SimpleMAOscillator: false,
    SimpleMASignal: false,
  });

  if (result.length === 0) return null;

  const last = result[result.length - 1];

  const macd = last.MACD ?? 0;
  const signal = last.signal ?? 0;
  const histogram = last.histogram ?? 0;

  let trend: "bullish" | "bearish" | "neutral" = "neutral";

  if (macd > signal) trend = "bullish";
  else if (macd < signal) trend = "bearish";

  return {
    macd,
    signal,
    histogram,
    trend,
  };
}