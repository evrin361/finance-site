export interface IndicatorConfirmationObject {
  confidenceScore: number;

  bullishSignals: number;

  bearishSignals: number;

  neutralSignals: number;

  finalBias:
    | "bullish"
    | "bearish"
    | "neutral";

  summary: string;
}
interface IndicatorInputs {
  emaTrend?: "bullish" | "bearish" | "neutral";

  rsiSignal?: "overbought" | "oversold" | "neutral";

  macdTrend?: "bullish" | "bearish" | "neutral";

  volumeStrength?: "high" | "medium" | "low";

  stochasticSignal?:
    | "overbought"
    | "oversold"
    | "neutral";


bollingerPosition?:
  | "upper"
  | "middle"
  | "lower";


  

}
export function runIndicatorConfirmationEngine(
  indicators: IndicatorInputs
): IndicatorConfirmationObject {


   let bullishSignals = 0;
let bearishSignals = 0;
let neutralSignals = 0;
let confidenceScore = 0;

if (indicators.emaTrend === "bullish") {
  bullishSignals++;
  confidenceScore += 25;
} else if (indicators.emaTrend === "bearish") {
  bearishSignals++;
  confidenceScore += 25;
} else {
  neutralSignals++;
}

if (indicators.macdTrend === "bullish") {
  bullishSignals++;
  confidenceScore += 25;
} else if (indicators.macdTrend === "bearish") {
  bearishSignals++;
  confidenceScore += 25;
} else {
  neutralSignals++;
}

if (indicators.rsiSignal === "oversold") {
  bullishSignals++;
  confidenceScore += 15;
} else if (indicators.rsiSignal === "overbought") {
  bearishSignals++;
  confidenceScore += 15;
} else {
  neutralSignals++;
}


if (indicators.volumeStrength === "high") {
  bullishSignals++;
  confidenceScore += 15;
} else if (indicators.volumeStrength === "low") {
  bearishSignals++;
  confidenceScore += 15;
} else {
  neutralSignals++;
}


if (indicators.bollingerPosition === "lower") {
  bullishSignals++;
  confidenceScore += 10;
} else if (indicators.bollingerPosition === "upper") {
  bearishSignals++;
  confidenceScore += 10;
} else {
  neutralSignals++;
}




if (indicators.stochasticSignal === "oversold") {
  bullishSignals++;
  confidenceScore += 10;
} else if (indicators.stochasticSignal === "overbought") {
  bearishSignals++;
  confidenceScore += 10;
} else {
  neutralSignals++;
}

let finalBias: "bullish" | "bearish" | "neutral" =
  "neutral";

if (bullishSignals > bearishSignals) {
  finalBias = "bullish";
} else if (bearishSignals > bullishSignals) {
  finalBias = "bearish";
}

const summary =
  `Bullish: ${bullishSignals} | Bearish: ${bearishSignals} | Neutral: ${neutralSignals}`;

  return {
confidenceScore,
  bullishSignals,

  bearishSignals,

  neutralSignals,

finalBias,
  summary,
};
}