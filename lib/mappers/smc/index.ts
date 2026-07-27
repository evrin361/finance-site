import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

import { mapMarketStructureFinding } from "./mapMarketStructureFinding";

export * from "./mapLiquidityFinding";
export * from "./mapOrderBlockFinding";
export * from "./mapMarketStructureFinding";
export * from "./mapFvgFinding";
export * from "./mapSmartMoneyPhaseFinding";
export * from "./mapEntriesFinding";
export * from "./mapTargetsFinding";
export * from "./mapStopLossFinding";
export * from "./mapRiskRewardFinding";
export * from "./mapScenarioFinding";
export * from "./mapWeeklyBiasFinding";
export * from "./mapMidTermViewFinding";
export * from "./mapLongTermViewFinding";
export * from "./mapMarketStatusFinding";

export function mapSmcFindings(
  smc: SMCAnalysisObject
): Finding[] {

  return [

    ...mapMarketStructureFinding(smc),

  ];

  
}