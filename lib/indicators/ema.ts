import { EMA } from "technicalindicators";

export function calculateEMA(
  prices: number[],
  period: number
): number | null {
  const result = EMA.calculate({
    period,
    values: prices,
  });

  if (result.length === 0) {
    return null;
  }

  return result[result.length - 1];
}