import { SMCAnalysisObject } from "./SMCAnalysisObject";
import { IndicatorConfirmationObject } from "./IndicatorConfirmationObject";

export interface MasterAnalysisObject {
  meta: {
    market: string;
    symbol: string;
    timeframe: string;
    created_at: string;
  };

  smc: SMCAnalysisObject;

  confirmation: IndicatorConfirmationObject;

  final_assessment: {
    bias: "bullish" | "bearish" | "neutral";

    confidence: number;

    trade_quality:
      | "A+"
      | "A"
      | "B"
      | "C"
      | "D";

    final_summary: string;
  };

  delivery: {
    free: Record<string, unknown>;

    economic: Record<string, unknown>;

    premium: Record<string, unknown>;
  };
}