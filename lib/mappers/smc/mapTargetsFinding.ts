import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

export function mapTargetsFinding(
  smc: SMCAnalysisObject
): Finding[] {
  return [
    {
      type: "TARGETS",

      source: "engine1",

      payload: {
        target1: smc.target_1,
        target2: smc.target_2,
        target3: smc.target_3,
      },

      timestamp: Date.now(),
    },
  ];
}