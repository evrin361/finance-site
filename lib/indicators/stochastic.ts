import { Stochastic } from "technicalindicators";

interface StochasticResult {
  k: number;
  d: number;
  signal: "overbought" | "oversold" | "neutral";
}

export function calculateStochastic(
  highs: number[],
  lows: number[],
  closes: number[],
  period: number = 14,
  signalPeriod: number = 3
): StochasticResult | null {
  const result = Stochastic.calculate({
    high: highs,
    low: lows,
    close: closes,
    period,
    signalPeriod,
  });

  if (result.length === 0) return null;

  const last = result[result.length - 1];

  let signal: "overbought" | "oversold" | "neutral" = "neutral";

  if (last.k >= 80) signal = "overbought";
  else if (last.k <= 20) signal = "oversold";

  return {
    k: last.k,
    d: last.d,
    signal,
  };
}