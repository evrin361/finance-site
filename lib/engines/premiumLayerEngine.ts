// lib/engines/premiumLayerEngine.ts
import { SMCOutput } from "./engine1";
import { generateTradePlan } from "./tradePlanningEngine";
import { generateCapitalManagement } from "./capitalManagementEngine";

export interface PremiumLayerOutput {
  tradePlan: string;
  profitTakingPlan: string;
  stopLossManagement: string;
  positionManagement: string;
  capitalManagement: string;
  positionSizing: string;
}

/**
 * Premium Layer Engine - Operational Skeleton
 */
export function generatePremiumLayer(engineOutput: SMCOutput): PremiumLayerOutput {

  // مرحله 1: تولید Trade Plan عملیاتی
  const tradePlanOutput = generateTradePlan(engineOutput);

  // مرحله 2: تولید Capital Management عملیاتی
  const capitalManagementOutput = generateCapitalManagement(engineOutput);

  // مرحله 3: ادغام خروجی‌ها
  return {
    tradePlan: tradePlanOutput.tradePlan,
    profitTakingPlan: tradePlanOutput.profitTakingPlan,
    stopLossManagement: tradePlanOutput.stopLossManagement,
    positionManagement: tradePlanOutput.positionManagement,
    capitalManagement: capitalManagementOutput.capitalManagement,
    positionSizing: capitalManagementOutput.positionSizing,
  };
}