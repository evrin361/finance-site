import { Claim } from "@/lib/types/Claim";
import { Insight } from "@/lib/types/Insight";

export function generateMarketStatusInsight(
  claims: Claim[]
): Insight | null {

  if (claims.length === 0) {
    return null;
  }

  const trendClaim =
    claims.find(c => c.type === "TREND");

  const liquidityClaim =
    claims.find(c => c.type === "LIQUIDITY_CLAIM");

  const smartMoneyClaim =
    claims.find(c => c.type === "SMART_MONEY");

  const orderBlockClaim =
    claims.find(c => c.type === "ORDER_BLOCK_CLAIM");

  if (!trendClaim) {
    return null;
  }

  let marketStatus = "RANGING";

  if (
    trendClaim.result === "UPTREND" &&
    liquidityClaim?.result === "BUY_SIDE_DOMINANT"
  ) {
    marketStatus = "STRONG_BULLISH";
  }

  else if (
    trendClaim.result === "UPTREND" &&
    liquidityClaim?.result === "SELL_SIDE_DOMINANT"
  ) {
    marketStatus = "WEAK_BULLISH";
  }

  else if (
    trendClaim.result === "DOWNTREND" &&
    liquidityClaim?.result === "SELL_SIDE_DOMINANT"
  ) {
    marketStatus = "STRONG_BEARISH";
  }

  else if (
    trendClaim.result === "DOWNTREND" &&
    liquidityClaim?.result === "BUY_SIDE_DOMINANT"
  ) {
    marketStatus = "WEAK_BEARISH";
  }

  else if (
    trendClaim.result === "UPTREND"
  ) {
    marketStatus = "BULLISH";
  }

  else if (
    trendClaim.result === "DOWNTREND"
  ) {
    marketStatus = "BEARISH";
  }

  const supportingClaims: Claim[] = [
    trendClaim,
  ];

  if (liquidityClaim) {
    supportingClaims.push(liquidityClaim);
  }

  if (smartMoneyClaim) {
    supportingClaims.push(smartMoneyClaim);
  }

  if (orderBlockClaim) {
    supportingClaims.push(orderBlockClaim);
  }

  return {

    id: crypto.randomUUID(),

    type: "MARKET_STATUS",

    result: marketStatus,

    confidence: trendClaim.confidence,

    supportingClaims,

  };

}