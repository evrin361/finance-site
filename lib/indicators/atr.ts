import { ATR } from "technicalindicators";

interface ATRResult {
  value: number;
  volatility: "high" | "medium" | "low";
}

export function calculateATR(
  highs: number[],
  lows: number[],
  closes: number[],
  period: number = 14
): ATRResult | null {
  const result = ATR.calculate({
    high: highs,
    low: lows,
    close: closes,
    period,
  });

  if (result.length === 0) return null;

  const value = result[result.length - 1];

  let volatility: "high" | "medium" | "low" = "medium";

  if (value > 2) volatility = "high";
  else if (value < 1) volatility = "low";

  return { value, volatility };
}