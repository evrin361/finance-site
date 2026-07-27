import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { Finding } from "@/lib/types/Finding";

export function mapEntriesFinding(
  smc: SMCAnalysisObject
): Finding[] {
  return [
    {
      type: "ENTRIES",

      source: "engine1",

      payload: {
        aggressive: smc.aggressive_entry,
        conservative: smc.conservative_entry,
      },

      timestamp: Date.now(),
    },
  ];
}