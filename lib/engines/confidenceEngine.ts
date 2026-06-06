import { SMCOutput } from "./engine1";
import { ConfidenceOutput } from "../types/ConfidenceOutput";


export function generateConfidence(
  engineOutput: SMCOutput
) {
  let score = 0;

  const reasons: string[] = [];

  if (
    engineOutput.trend === "Bullish" ||
    engineOutput.trend === "Bearish"
  ) {
    score += 20;
    reasons.push("Trend confirmed");
  }

  if (
    engineOutput.marketStructure === "Bullish" ||
    engineOutput.marketStructure === "Bearish"
  ) {
    score += 20;
    reasons.push("Market Structure confirmed");
  }

  if (engineOutput.BOS.length > 0) {
    score += 15;
    reasons.push("BOS detected");
  }

  if (engineOutput.CHOCH.length > 0) {
    score += 15;
    reasons.push("CHOCH detected");
  }

  if (
    engineOutput.bullishOrderBlocks.length > 0 ||
    engineOutput.bearishOrderBlocks.length > 0
  ) {
    score += 10;
    reasons.push("Order Blocks detected");
  }

  if (engineOutput.FVGZones.length > 0) {
    score += 10;
    reasons.push("FVG detected");
  }

  if (
    engineOutput.buySideLiquidity.length > 0 ||
    engineOutput.sellSideLiquidity.length > 0
  ) {
    score += 10;
    reasons.push("Liquidity detected");
  }

  return {
    confidenceLevel: score,
    confidenceReason: reasons.join(" | "),
  };
}