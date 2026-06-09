import { BollingerBands } from "technicalindicators";

interface BollingerResult {
  upper: number;
  middle: number;
  lower: number;
  position: "upper_band" | "middle" | "lower";
}

export function calculateBollinger(
  prices: number[],
  period: number = 20,
  stdDev: number = 2
): BollingerResult | null {
  const result = BollingerBands.calculate({
    period,
    stdDev,
    values: prices,
  });

  if (result.length === 0) return null;

  const last = result[result.length - 1];

  let position: "upper_band" | "middle" | "lower" = "middle";

  if (prices[prices.length - 1] > last.upper) position = "upper_band";
  else if (prices[prices.length - 1] < last.lower) position = "lower";
  else position = "middle";

  return {
    upper: last.upper,
    middle: last.middle,
    lower: last.lower,
    position,
  };
}