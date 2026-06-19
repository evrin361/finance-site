import { IndicatorConfirmationObject } from "@/lib/types/IndicatorConfirmationObject";

interface CurrentEngine2Output {
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

export function mapIndicatorConfirmation(
  input: CurrentEngine2Output
): IndicatorConfirmationObject {

  return {
    confidence_score: input.confidenceScore,

    signal_alignment: input.finalBias,

    bullish_signals: input.bullishSignals,

    bearish_signals: input.bearishSignals,

    neutral_signals: input.neutralSignals,

    warnings: [],

    indicator_summary: input.summary,
  };
}