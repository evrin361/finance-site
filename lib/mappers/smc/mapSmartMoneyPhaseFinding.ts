import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

export function mapSmartMoneyPhaseFinding(
  smc: SMCAnalysisObject
): Finding[] {
  return [
    {
      type: "SMART_MONEY_PHASE",

      source: "engine1",

      payload: {
        phase: smc.market_phase,
        behavior: smc.smart_money_behavior,
        whale_activity: smc.whale_activity,
      },

      timestamp: Date.now(),
    },
  ];
}