import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

export function mapMarketStatusFinding(
  smc: SMCAnalysisObject
): Finding[] {

  return [

    {
      type: "MARKET_STATUS",

      source: "engine1",

      payload: {
        status: smc.market_status,
        confidence: smc.analysis_confidence,
        risk: smc.trade_risk,
      },

      timestamp: Date.now(),
    },

  ];

}