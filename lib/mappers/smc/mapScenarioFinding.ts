import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

export function mapScenarioFinding(
  smc: SMCAnalysisObject
): Finding[] {

  return [

    {
      type: "SCENARIO",

      source: "engine1",

      payload: {
        bullish_case: smc.bullish_case,
        bearish_case: smc.bearish_case,
      },

      timestamp: Date.now(),
    },

  ];

}