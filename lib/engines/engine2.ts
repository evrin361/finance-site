import { IndicatorObject } from "../types/IndicatorObject";
import { IndicatorConfirmationObject } from "../types/IndicatorConfirmationObject";

import { buildIndicatorObject } from "../indicators/buildIndicatorObject";
import { runIndicatorConfirmationEngine } from "./indicatorConfirmationEngine";

import { mapIndicatorObject }
from "../mappers/indicatorMapper";

import { mapIndicatorConfirmation }
from "../mappers/indicatorConfirmationMapper";

export interface Engine2Input {
  candles: {
    open: number[];
    high: number[];
    low: number[];
    close: number[];
    volume: number[];
  };
}

export interface Engine2Output {
  indicators: IndicatorObject;
  confirmation: IndicatorConfirmationObject;
}

export function runEngine2(
  input: Engine2Input
): Engine2Output {

  const indicators =
    buildIndicatorObject({
      closes: input.candles.close,
      highs: input.candles.high,
      lows: input.candles.low,
      volumes: input.candles.volume,
    });

  const confirmation =
    runIndicatorConfirmationEngine({
      emaTrend: indicators.emaTrend,
      rsiSignal: indicators.rsiSignal,
      macdTrend: indicators.macdTrend,
      volumeStrength: indicators.volumeStrength,
      stochasticSignal: indicators.stochasticSignal,
      bollingerPosition: indicators.bollingerPosition,
      atrVolatility: indicators.atrVolatility,
    });


    const mappedIndicators =
  mapIndicatorObject(indicators);

const mappedConfirmation =
  mapIndicatorConfirmation(confirmation);


  return {
  indicators: mappedIndicators,
  confirmation: mappedConfirmation,
};
}