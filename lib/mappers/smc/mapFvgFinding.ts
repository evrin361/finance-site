import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

export function mapFvgFinding(
  smc: SMCAnalysisObject
): Finding[] {

  return [

    {
      type: "FVG",

      source: "engine1",

      payload: {
        fvg_zones: smc.fvg_zones,
        imbalance_zones: smc.imbalance_zones,
      },

      timestamp: Date.now(),
    },

  ];

}