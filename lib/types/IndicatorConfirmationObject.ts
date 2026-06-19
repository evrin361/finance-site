export interface IndicatorConfirmationObject {
  confidence_score: number;

  signal_alignment:
    | "bullish"
    | "bearish"
    | "neutral";

  bullish_signals: number;

  bearish_signals: number;

  neutral_signals: number;

  warnings: string[];

  indicator_summary: string;
}