import { SMCOutput } from "./engine1";
import { RiskOutput } from "../types/RiskOutput";

export function calculateRisk(engineOutput: SMCOutput): RiskOutput {

  let score = 0;
  const reasons: string[] = [];

  // Trend alignment
  if (engineOutput.trend === "Bullish" && engineOutput.marketStructure === "Bullish") {
    score += 30;
    reasons.push("Trend aligns with market structure");
  } else if (engineOutput.trend === "Bearish" && engineOutput.marketStructure === "Bearish") {
    score += 30;
    reasons.push("Trend aligns with market structure");
  } else {
    score += 10;
    reasons.push("Trend misalignment detected");
  }

  // BOS & CHOCH impact
  if (engineOutput.BOS.length > 0) {
    score += 20;
    reasons.push("BOS detected");
  }
  if (engineOutput.CHOCH.length > 0) {
    score += 20;
    reasons.push("CHOCH detected");
  }

  // Liquidity & Order Blocks
  if (engineOutput.buySideLiquidity.length > 0 || engineOutput.sellSideLiquidity.length > 0) {
    score += 10;
    reasons.push("Liquidity present");
  }

  if (engineOutput.bullishOrderBlocks.length > 0 || engineOutput.bearishOrderBlocks.length > 0) {
    score += 10;
    reasons.push("Order Blocks present");
  }

  // Normalize score 0-100
  if (score > 100) score = 100;

  // Determine marketStatus
  let marketStatus: string = "Neutral";
  if (engineOutput.trend === "Bullish" && score >= 60) {
    marketStatus = "Bullish Continuation";
  } else if (engineOutput.trend === "Bearish" && score >= 60) {
    marketStatus = "Bearish Continuation";
  } else if (score < 40) {
    marketStatus = "Potential Reversal";
  }

  // Determine riskReason
  let riskReason: string;
  if (score >= 70) {
    riskReason = "Low Risk: Market aligns with trade";
  } else if (score >= 40) {
    riskReason = "Medium Risk: Some conflict in structure";
  } else {
    riskReason = "High Risk: Market opposes trade direction";
  }

  return {
    riskScore: score,
    riskReason,
    marketStatus,
  };
}