import { Candle } from "@/lib/normalizer/normalizeCandle";

export interface SmartMoneyBehaviorObject {
  marketPhase:
    | "Accumulation"
    | "Manipulation"
    | "Distribution"
    | "Expansion";

  smartMoneyBehavior: string;

  whaleActivity: string;
}

export function detectSmartMoneyBehavior(
  candles: Candle[]
): SmartMoneyBehaviorObject {

  const last50 = candles.slice(-50);

  const highs = last50.map(c => c.high);
  const lows = last50.map(c => c.low);

  const highest = Math.max(...highs);
  const lowest = Math.min(...lows);

  const rangePercent =
    ((highest - lowest) / lowest) * 100;

  // --------------------
  // Accumulation
  // --------------------

  if (rangePercent < 5) {

    return {
      marketPhase: "Accumulation",
      smartMoneyBehavior:
        "Price is moving inside a narrow range. Possible accumulation by smart money.",

      whaleActivity:
        "Potential whale accumulation detected."
    };

  }

  // --------------------
  // Expansion
  // --------------------

  if (rangePercent > 15) {

    return {
      marketPhase: "Expansion",
      smartMoneyBehavior:
        "Strong directional movement detected. Expansion phase active.",

      whaleActivity:
        "Whales likely driving momentum."
    };

  }

  // --------------------
  // Manipulation
  // --------------------

  if (rangePercent >= 5 && rangePercent <= 10) {

    return {
      marketPhase: "Manipulation",
      smartMoneyBehavior:
        "Liquidity engineering behavior detected. Possible manipulation phase.",

      whaleActivity:
        "Possible liquidity sweep by large players."
    };

  }

  // --------------------
  // Distribution
  // --------------------

  return {
    marketPhase: "Distribution",

    smartMoneyBehavior:
      "Distribution phase suspected after previous movement.",

    whaleActivity:
      "Possible whale distribution activity."
  };

}