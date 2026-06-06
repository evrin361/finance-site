import { SMCOutput } from "./engine1";
import { TradePlanOutput } from "../types/TradePlanOutput";

export function generateTradePlan(
  engineOutput: SMCOutput
): TradePlanOutput {

  const aggressiveEntry =
    engineOutput.aggressiveEntry ?? 0;

  const conservativeEntry =
    engineOutput.conservativeEntry ?? 0;

  const trend =
    engineOutput.trend;

  let tradePlan = "";

  if (trend === "Bullish") {
    tradePlan =
      `Bullish setup | Aggressive Entry: ${aggressiveEntry} | Conservative Entry: ${conservativeEntry}`;
  } else if (trend === "Bearish") {
    tradePlan =
      `Bearish setup | Aggressive Entry: ${aggressiveEntry} | Conservative Entry: ${conservativeEntry}`;
  } else {
    tradePlan =
      `Neutral setup | Wait for confirmation`;
  }

  const profitTakingPlan =
    `TP1: ${engineOutput.target1} | TP2: ${engineOutput.target2} | TP3: ${engineOutput.target3}`;

  const stopLossManagement =
    `Stop Loss: ${engineOutput.stopLoss}`;

  const positionManagement =
    `Risk Reward Ratio: ${engineOutput.riskReward}`;

  return {
    tradePlan,
    profitTakingPlan,
    stopLossManagement,
    positionManagement,
  };
}