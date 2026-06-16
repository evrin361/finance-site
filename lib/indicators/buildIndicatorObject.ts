import { calculateAllEMAs } from "./ema";
import { calculateRSI } from "./rsi";
import { calculateMACD } from "./macd";
import { calculateVolume } from "./volume";
import { calculateBollinger } from "./bollinger";
import { calculateStochastic } from "./stochastic";

export interface IndicatorObject {
ema20: number | null;
ema50: number | null;
ema200: number | null;

emaTrend:
| "bullish"
| "bearish"
| "neutral";

rsi: number | null;

rsiSignal:
| "overbought"
| "oversold"
| "neutral";

macd: number | null;

signal: number | null;

histogram: number | null;

macdTrend:
| "bullish"
| "bearish"
| "neutral";

volume: number | null;

volumeStrength:
| "high"
| "medium"
| "low";

upper: number | null;

middle: number | null;

lower: number | null;

bollingerPosition:
  | "upper"
  | "middle"
  | "lower";
stochasticK: number | null;

stochasticD: number | null;

stochasticSignal:
| "overbought"
| "oversold"
| "neutral";
}

interface IndicatorInput {
closes: number[];
highs: number[];
lows: number[];
volumes: number[];
}

export function buildIndicatorObject(
data: IndicatorInput
): IndicatorObject {

const emas =
calculateAllEMAs(data.closes);

let emaTrend:
| "bullish"
| "bearish"
| "neutral" = "neutral";

if (
emas.ema20 &&
emas.ema50 &&
emas.ema200
) {
if (
emas.ema20 > emas.ema50 &&
emas.ema50 > emas.ema200
) {
emaTrend = "bullish";
} else if (
emas.ema20 < emas.ema50 &&
emas.ema50 < emas.ema200
) {
emaTrend = "bearish";
}
}

const rsiResult =
calculateRSI(data.closes);

const macdResult =
calculateMACD(data.closes);

const volumeResult =
calculateVolume(data.volumes);

const bollingerResult =
calculateBollinger(data.closes);

const stochasticResult =
calculateStochastic(
data.highs,
data.lows,
data.closes
);

return {
ema20: emas.ema20,
ema50: emas.ema50,
ema200: emas.ema200,
emaTrend,

rsi:
  rsiResult?.value ?? null,

rsiSignal:
  rsiResult?.signal ?? "neutral",

macd:
  macdResult?.macd ?? null,

signal:
  macdResult?.signal ?? null,

histogram:
  macdResult?.histogram ?? null,

macdTrend:
  macdResult?.trend ?? "neutral",

volume:
  volumeResult?.volume ?? null,

volumeStrength:
  volumeResult?.volume_strength ?? "medium",

upper:
  bollingerResult?.upper ?? null,

middle:
  bollingerResult?.middle ?? null,

lower:
  bollingerResult?.lower ?? null,

bollingerPosition:
  bollingerResult?.position ?? "middle",

stochasticK:
  stochasticResult?.k ?? null,

stochasticD:
  stochasticResult?.d ?? null,

stochasticSignal:
  stochasticResult?.signal ?? "neutral",


};
}
