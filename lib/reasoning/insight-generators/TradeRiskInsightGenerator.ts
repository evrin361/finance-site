import { Claim } from "@/lib/types/Claim";
import { Insight } from "@/lib/types/Insight";

export function generateTradeRiskInsight(
  claims: Claim[]
): Insight | null {

  if (claims.length === 0) {
    return null;
  }

  const relevantClaims = claims.filter(c =>
    [
      "TREND",
      "LIQUIDITY_CLAIM",
      "SMART_MONEY",
      "ORDER_BLOCK_CLAIM",
      "FVG",
    ].includes(c.type)
  );

  if (relevantClaims.length === 0) {
    return null;
  }

  const averageConfidence = Math.round(
    relevantClaims.reduce(
      (sum, claim) => sum + claim.confidence,
      0
    ) / relevantClaims.length
  );

  let risk = "HIGH";

  if (averageConfidence >= 85) {
    risk = "LOW";
  } else if (averageConfidence >= 70) {
    risk = "MEDIUM";
  }

  return {

    id: crypto.randomUUID(),

    type: "TRADE_RISK",

    result: risk,

    confidence: averageConfidence,

    supportingClaims: relevantClaims,

  };

}