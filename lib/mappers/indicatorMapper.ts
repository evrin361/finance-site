import {
  IndicatorObject as EngineIndicatorObject,
} from "../indicators/buildIndicatorObject";

import {
  IndicatorObject,
} from "../types/IndicatorObject";

export function mapIndicatorObject(
  input: EngineIndicatorObject
): IndicatorObject {

 return {

  ema20: input.ema20,

  ema50: input.ema50,

  ema200: input.ema200,

  rsi: {
    value: input.rsi,
    signal: input.rsiSignal,
  },

  macd: {
    macd: input.macd,
    signal: input.signal,
    histogram: input.histogram,
    trend: input.macdTrend,
  },

  volume_analysis: {
    volume: input.volume,
    volume_strength: input.volumeStrength,
  },

  atr: {
    value: input.atr,
    volatility: input.atrVolatility,
  },

  bollinger_bands: {
    upper: input.upper,
    middle: input.middle,
    lower: input.lower,
    position: input.bollingerPosition,
  },

  stochastic: {
    k: input.stochasticK,
    d: input.stochasticD,
    signal: input.stochasticSignal,
  },

};

}