import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

export function mapStopLossFinding(
  smc: SMCAnalysisObject
): Finding[] {
  return [
    {
      type: "STOP_LOSS",

      source: "engine1",

      payload: {
        stop_loss: smc.stop_loss,
      },

      timestamp: Date.now(),
    },
  ];
}