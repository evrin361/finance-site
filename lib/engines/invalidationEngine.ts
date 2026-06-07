import { SMCOutput } from "./engine1";
import { InvalidationOutput } from "../types/InvalidationOutput";

export function generateInvalidation(
  engineOutput: SMCOutput
): InvalidationOutput {

  let bullishInvalidation = "No invalidation detected";
  let bearishInvalidation = "No invalidation detected";
  let invalidationReason = "Structure remains valid";

  const bearishCHOCH =
    engineOutput.CHOCH.some((item: string) =>
      item.toLowerCase().includes("bearish")
    );

  const bullishCHOCH =
    engineOutput.CHOCH.some((item: string) =>
      item.toLowerCase().includes("bullish")
    );

  if (engineOutput.marketStructure === "Bullish" && bearishCHOCH) {
    bullishInvalidation = "Bearish CHOCH detected";
    invalidationReason = "Market structure shifted against bullish scenario";
  }

  if (engineOutput.marketStructure === "Bearish" && bullishCHOCH) {
    bearishInvalidation = "Bullish CHOCH detected";
    invalidationReason = "Market structure shifted against bearish scenario";
  }

// Liquidity Sweep Validation

const buyLiquidityHit =
  engineOutput.buySideLiquidity.length > 0;

const sellLiquidityHit =
  engineOutput.sellSideLiquidity.length > 0;

if (
  engineOutput.marketStructure === "Bullish" &&
  sellLiquidityHit
) {
  bullishInvalidation =
    "Sell Side Liquidity Sweep";

  invalidationReason =
    "Liquidity swept against bullish structure";
}

if (
  engineOutput.marketStructure === "Bearish" &&
  buyLiquidityHit
) {
  bearishInvalidation =
    "Buy Side Liquidity Sweep";

  invalidationReason =
    "Liquidity swept against bearish structure";
}





  return {
    bullishInvalidation,
    bearishInvalidation,
    invalidationReason,
  };
}