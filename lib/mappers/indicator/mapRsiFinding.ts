import { IndicatorObject } from "@/lib/types/IndicatorObject";
import { Finding } from "@/lib/types/Finding";

export function mapRsiFinding(
  indicators: IndicatorObject
): Finding[] {

  return [
    {
      type: "RSI_VALUE",

      source: "engine2",

      payload: {
        period: 14,
        value: indicators.rsi.value,
      },

      timestamp: Date.now(),
    },
  ];

}