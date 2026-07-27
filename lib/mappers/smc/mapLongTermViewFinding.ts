import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

export function mapLongTermViewFinding(
  smc: SMCAnalysisObject
): Finding[] {

  return [

    {
      type: "LONG_TERM_VIEW",

      source: "engine1",

      payload: {
        bullish_probability: smc.long_term_bullish_probability,
        neutral_probability: smc.long_term_neutral_probability,
        bearish_probability: smc.long_term_bearish_probability,

        summary: smc.long_term_summary,
      },

      timestamp: Date.now(),
    },

  ];

}