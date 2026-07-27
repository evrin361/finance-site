import { IndicatorObject } from "@/lib/types/IndicatorObject";
import { Finding } from "@/lib/types/Finding";

export function mapBollingerFinding(
  indicators: IndicatorObject
): Finding[] {

  return [

    {
      type: "BOLLINGER_ANALYSIS",

      source: "engine2",

      payload: {
        upper: indicators.bollinger_bands.upper,
        middle: indicators.bollinger_bands.middle,
        lower: indicators.bollinger_bands.lower,
        position: indicators.bollinger_bands.position,
      },

      timestamp: Date.now(),
    },

  ];

}