import { RSI } from "technicalindicators";

export function calculateRSI(
  prices: number[],
  period: number = 14
) {
  const result = RSI.calculate({
    period,
    values: prices,
  });

  if (result.length === 0) {
    return null;
  }

  const value = result[result.length - 1];

  let signal: "overbought" | "oversold" | "neutral" = "neutral";

  if (value >= 70) {
    signal = "overbought";
  } else if (value <= 30) {
    signal = "oversold";
  }

  return {
    value,
    signal,
  };
}