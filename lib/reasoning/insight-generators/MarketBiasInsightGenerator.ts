import { Claim } from "@/lib/types/Claim";
import { Insight } from "@/lib/types/Insight";

export function generateMarketBiasInsight(
  claims: Claim[]
): Insight | null {

  if (claims.length === 0) {
    return null;
  }

  const trendClaim =
    claims.find(c => c.type === "TREND");

  const smartMoneyClaim =
    claims.find(c => c.type === "SMART_MONEY");

  const liquidityClaim =
    claims.find(c => c.type === "LIQUIDITY_CLAIM");

  if (
    !trendClaim ||
    !smartMoneyClaim ||
    !liquidityClaim
  ) {
    return null;
  }

  const bias =
    trendClaim.result === "UPTREND"
      ? "BULLISH"
      : "BEARISH";

  const confidence =
    Math.round(
      (
        trendClaim.confidence +
        smartMoneyClaim.confidence +
        liquidityClaim.confidence
      ) / 3
    );

  return {

    id: crypto.randomUUID(),

    type: "MARKET_BIAS",

    result: bias,

    confidence,

    supportingClaims: [
      trendClaim,
      smartMoneyClaim,
      liquidityClaim,
    ],

  };

}