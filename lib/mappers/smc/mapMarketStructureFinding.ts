import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

export function mapMarketStructureFinding(
  smc: SMCAnalysisObject
): Finding[] {

  return [

    {
      type: "MARKET_STRUCTURE",

      source: "engine1",

      payload: {
        market_structure: smc.market_structure,
        trend: smc.trend,
        bos: smc.BOS,
        choch: smc.CHOCH,
      },

      timestamp: Date.now(),
    },

  ];

}