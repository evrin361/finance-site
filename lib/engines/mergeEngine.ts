import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { IndicatorConfirmationObject } from "@/lib/types/IndicatorConfirmationObject";
import { MasterAnalysisObject } from "@/lib/types/MasterAnalysisObject";

function calculateTradeQuality(
  confidence: number,
  risk: string
): "A+" | "A" | "B" | "C" | "D" {

  const normalizedRisk = risk.toLowerCase();

  if (
    confidence >= 80 &&
    normalizedRisk === "low"
  ) {
    return "A+";
  }

  if (
    confidence >= 70 &&
    (normalizedRisk === "low" ||
      normalizedRisk === "medium")
  ) {
    return "A";
  }

  if (confidence >= 50) {
    return "B";
  }

  if (confidence >= 30) {
    return "C";
  }

  return "D";
}

export function runMergeEngine(
  smc: SMCAnalysisObject,
  confirmation: IndicatorConfirmationObject
): MasterAnalysisObject {

  let bias: "bullish" | "bearish" | "neutral" =
  "neutral";

if (
  smc.market_status
    .toLowerCase()
    .includes("bullish")
) {
  bias = "bullish";
} else if (
  smc.market_status
    .toLowerCase()
    .includes("bearish")
) {
  bias = "bearish";
}

  const confidence =
    confirmation.confidence_score;

  const tradeQuality =
    calculateTradeQuality(
      confidence,
      smc.trade_risk
    );

  const finalSummary = [
    smc.executive_summary,
    confirmation.indicator_summary,
  ]
    .filter(Boolean)
    .join(" ");

  return {
    meta: {
      market: smc.market,
      symbol: smc.symbol,
      timeframe: smc.timeframe,
      created_at: smc.created_at,
    },

    smc,

    confirmation,

    final_assessment: {
      bias,

      confidence,

      trade_quality: tradeQuality,

      final_summary: finalSummary,
    },

    delivery: {
      free: {},

      economic: {},

      premium: {},
    },
  };
}