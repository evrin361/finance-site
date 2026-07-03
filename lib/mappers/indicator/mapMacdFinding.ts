import { IndicatorObject } from "@/lib/types/IndicatorObject";
import { Finding } from "@/lib/types/Finding";

export function mapMacdFinding(
  indicators: IndicatorObject
): Finding[] {

  return [

    {
      type: "MACD_VALUE",

      source: "engine2",

      payload: {
        macd: indicators.macd.macd,
        signal: indicators.macd.signal,
        histogram: indicators.macd.histogram,
      },

      timestamp: Date.now(),
    },

  ];

}