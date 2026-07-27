import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

export function mapWeeklyBiasFinding(
  smc: SMCAnalysisObject
): Finding[] {

  return [

    {
      type: "WEEKLY_BIAS",

      source: "engine1",

      payload: {
        bullish_probability: smc.mid_term_bullish_probability,
        neutral_probability: smc.mid_term_neutral_probability,
        bearish_probability: smc.mid_term_bearish_probability,
      },

      timestamp: Date.now(),
    },

  ];

}