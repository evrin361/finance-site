import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

export function mapMidTermViewFinding(
  smc: SMCAnalysisObject
): Finding[] {

  return [

    {
      type: "MID_TERM_VIEW",

      source: "engine1",

      payload: {
        bullish_probability: smc.mid_term_bullish_probability,
        neutral_probability: smc.mid_term_neutral_probability,
        bearish_probability: smc.mid_term_bearish_probability,

        summary: smc.mid_term_summary,
      },

      timestamp: Date.now(),
    },

  ];

}