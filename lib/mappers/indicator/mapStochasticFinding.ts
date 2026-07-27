import { IndicatorObject } from "@/lib/types/IndicatorObject";
import { Finding } from "@/lib/types/Finding";

export function mapStochasticFinding(
  indicators: IndicatorObject
): Finding[] {

  return [

    {
      type: "STOCHASTIC_ANALYSIS",

      source: "engine2",

      payload: {
        k: indicators.stochastic.k,
        d: indicators.stochastic.d,
        signal: indicators.stochastic.signal,
      },

      timestamp: Date.now(),
    },

  ];

}