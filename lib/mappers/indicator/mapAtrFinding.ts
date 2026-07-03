import { IndicatorObject } from "@/lib/types/IndicatorObject";
import { Finding } from "@/lib/types/Finding";

export function mapAtrFinding(
  indicators: IndicatorObject
): Finding[] {

  return [

    {
      type: "ATR_VALUE",

      source: "engine2",

      payload: {
        value: indicators.atr.value,
        volatility: indicators.atr.volatility,
      },

      timestamp: Date.now(),
    },

  ];

}