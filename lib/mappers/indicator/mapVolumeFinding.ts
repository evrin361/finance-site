import { IndicatorObject } from "@/lib/types/IndicatorObject";
import { Finding } from "@/lib/types/Finding";

export function mapVolumeFinding(
  indicators: IndicatorObject
): Finding[] {

  return [

    {
      type: "VOLUME_ANALYSIS",

      source: "engine2",

      payload: {
        volume: indicators.volume_analysis.volume,
        strength: indicators.volume_analysis.volume_strength,
      },

      timestamp: Date.now(),
    },

  ];

}