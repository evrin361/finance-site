import { SMCOutput } from "./engine1";
import { TradePlanOutput } from "../types/TradePlanOutput";

export function generateTradePlan(engineOutput: SMCOutput): TradePlanOutput {
  // تعیین Aggressive و Conservative Entry
  const aggressiveEntry = engineOutput.aggressiveEntry ?? 0;
  const conservativeEntry = engineOutput.conservativeEntry ?? 0;

  // تعیین Stop Loss
  let stopLossManagement = "Not Calculated";
  if (engineOutput.trend === "Bullish") {
    stopLossManagement = `Stop Loss below ${engineOutput.stopLoss ?? 0}`;
  }
  if (engineOutput.trend === "Bearish") {
    stopLossManagement = `Stop Loss above ${engineOutput.stopLoss ?? 0}`;
  }

  // تعیین Profit Taking
  const profitTakingPlan = `Take Profit Targets: ${engineOutput.target1 ?? 0}, ${engineOutput.target2 ?? 0}, ${engineOutput.target3 ?? 0}`;

  // تعیین Trade Plan کلی
  const tradePlan = `Aggressive Entry at ${aggressiveEntry}, Conservative at ${conservativeEntry}`;

  // تعیین Position Management
  const positionManagement = `Follow Risk/Reward: ${engineOutput.riskReward ?? 0}`;

  return {
    tradePlan,
    profitTakingPlan,
    stopLossManagement,
    positionManagement,
  };
}