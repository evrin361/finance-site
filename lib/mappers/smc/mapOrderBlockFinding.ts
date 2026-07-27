import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

export function mapOrderBlockFinding(
  smc: SMCAnalysisObject
): Finding[] {

  return [

    {
      type: "ORDER_BLOCK",

      source: "engine1",

      payload: {
        bullish: smc.bullish_order_blocks,
        bearish: smc.bearish_order_blocks,
      },

      timestamp: Date.now(),
    },

  ];

}