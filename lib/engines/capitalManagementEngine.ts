// lib/engines/capitalManagementEngine.ts
import { SMCOutput } from "./engine1";
import { CapitalManagementOutput } from "../types/CapitalManagementOutput";
/**
 * Capital Management Engine - Version 0.1 Operational Logic
 * ورودی: خروجی Engine1 (SMCOutput)
 * خروجی: capitalManagement, positionSizing, riskPerTrade
 */
export function generateCapitalManagement(
  engineOutput: SMCOutput
): CapitalManagementOutput {

  const baseCapital = 10000;

  let riskPercent = 1;

  if (engineOutput.riskReward !== null) {
    if (engineOutput.riskReward >= 3) {
      riskPercent = 2;
    } else if (engineOutput.riskReward >= 2) {
      riskPercent = 1.5;
    } else {
      riskPercent = 1;
    }
  }

  const riskAmount = (baseCapital * riskPercent) / 100;

  const capitalManagement =
    `Risk ${riskPercent}% per trade (${riskAmount} USD)`;

  const positionSizing =
    `Account Size: ${baseCapital} USD | Risk Amount: ${riskAmount} USD`;

  const riskPerTrade =
    `${riskAmount} USD`;

  return {
    capitalManagement,
    positionSizing,
    riskPerTrade,
  };
}