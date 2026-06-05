// lib/engines/scenarioGenerator.ts
import { SMCOutput } from "./engine1";

export interface Scenario {
  title: string;
  probability: number; // درصد احتمال
  description: string;
}

export function generateScenarios(engineOutput: SMCOutput): Scenario[] {
  const scenarios: Scenario[] = [];

  // سناریوی اصلی (Primary Scenario)
  if (engineOutput.trend === "Bullish") {
    scenarios.push({
      title: "Bullish Scenario",
      probability: 60 + Math.floor(Math.random() * 20), // 60-80%
      description: `Market shows bullish trend with ${engineOutput.marketPhase} phase. Key bullish signals detected.`,
    });
  } else if (engineOutput.trend === "Bearish") {
    scenarios.push({
      title: "Bearish Scenario",
      probability: 60 + Math.floor(Math.random() * 20), // 60-80%
      description: `Market shows bearish trend with ${engineOutput.marketPhase} phase. Key bearish signals detected.`,
    });
  } else {
    scenarios.push({
      title: "Neutral / Range Scenario",
      probability: 50,
      description: "Market is ranging or signals are conflicting.",
    });
  }

  // سناریوی ثانویه (Secondary Scenario) - بر اساس CHOCH و BOS
  let secondaryTitle = "";
  if (engineOutput.CHOCH.length > 0) secondaryTitle += "CHOCH signals observed. ";
  if (engineOutput.BOS.length > 0) secondaryTitle += "BOS patterns detected.";

  if (secondaryTitle.length > 0) {
    scenarios.push({
      title: "Secondary Scenario",
      probability: 40 + Math.floor(Math.random() * 30), // 40-70%
      description: secondaryTitle,
    });
  }

  // سناریوی جایگزین (Alternative Scenario) - بر اساس Liquidity و Order Blocks
  let altDesc = "";
  if (engineOutput.buySideLiquidity.length > 0) altDesc += "Buy side liquidity available. ";
  if (engineOutput.sellSideLiquidity.length > 0) altDesc += "Sell side liquidity available. ";
  if (engineOutput.bullishOrderBlocks.length > 0) altDesc += "Bullish order blocks detected. ";
  if (engineOutput.bearishOrderBlocks.length > 0) altDesc += "Bearish order blocks detected.";

  if (altDesc.length > 0) {
    scenarios.push({
      title: "Alternative Scenario",
      probability: 30 + Math.floor(Math.random() * 20), // 30-50%
      description: altDesc,
    });
  }

  return scenarios;
}