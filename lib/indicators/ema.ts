import { EMA } from "technicalindicators";

export function calculateEMA(prices: number[], period: number): number | null {
  const result = EMA.calculate({ period, values: prices });
  if (result.length === 0) return null;
  return result[result.length - 1];
}

// محاسبه همه EMAهای مورد نیاز
export function calculateAllEMAs(prices: number[]) {
  return {
    ema20: calculateEMA(prices, 20),
    ema50: calculateEMA(prices, 50),
    ema200: calculateEMA(prices, 200),
  };
}