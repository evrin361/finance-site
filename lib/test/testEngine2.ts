import {
  runIndicatorConfirmationEngine,
} from "../engines/indicatorConfirmationEngine";

const result =
  runIndicatorConfirmationEngine({
    emaTrend: "bullish",
    macdTrend: "bullish",
    rsiSignal: "neutral",
    volumeStrength: "high",
    bollingerPosition: "lower",
    stochasticSignal: "oversold",
  });

console.log(result);