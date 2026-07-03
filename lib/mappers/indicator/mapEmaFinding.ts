import { IndicatorObject } from "@/lib/types/IndicatorObject";
import { Finding } from "@/lib/types/Finding";

export function mapEmaFinding(
  indicators: IndicatorObject
): Finding[] {

  return [

    {
      type: "EMA_VALUE",

      source: "engine2",

      payload: {
        period: 20,
        value: indicators.ema20,
      },

      timestamp: Date.now(),
    },

    {
      type: "EMA_VALUE",

      source: "engine2",

      payload: {
        period: 50,
        value: indicators.ema50,
      },

      timestamp: Date.now(),
    },

    {
      type: "EMA_VALUE",

      source: "engine2",

      payload: {
        period: 200,
        value: indicators.ema200,
      },

      timestamp: Date.now(),
    },

  ];

}