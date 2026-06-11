import {
  runIndicatorConfirmationEngine,
} from "../engines/indicatorConfirmationEngine";

const result =
  runIndicatorConfirmationEngine({
    emaTrend: "bullish",
    macdTrend: "bullish",
    rsiSignal: "neutral",
  });

console.log(result);