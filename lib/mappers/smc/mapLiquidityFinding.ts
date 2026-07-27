import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

export function mapLiquidityFinding(
  smc: SMCAnalysisObject
): Finding[] {

  return [

    {
      type: "LIQUIDITY",

      source: "engine1",

      payload: {
        buy_side: smc.buy_side_liquidity,
        sell_side: smc.sell_side_liquidity,
        targets: smc.liquidity_targets,
      },

      timestamp: Date.now(),
    },

  ];

}