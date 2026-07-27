import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

export function mapRiskRewardFinding(
  smc: SMCAnalysisObject
): Finding[] {

  return [

    {
      type: "RISK_REWARD",

      source: "engine1",

      payload: {
        risk_reward: smc.risk_reward,
      },

      timestamp: Date.now(),
    },

  ];

}