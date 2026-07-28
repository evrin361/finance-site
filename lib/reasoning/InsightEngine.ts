import { Claim } from "@/lib/types/Claim";
import { Insight } from "@/lib/types/Insight";

import { generateMarketStatusInsight } from "./insight-generators/MarketStatusInsightGenerator";
import { generateAnalysisConfidenceInsight } from "./insight-generators/AnalysisConfidenceInsightGenerator";
import { generateTradeRiskInsight } from "./insight-generators/TradeRiskInsightGenerator";
import { generateMarketBiasInsight } from "./insight-generators/MarketBiasInsightGenerator";

export function generateInsights(
  claims: Claim[]
): Insight[] {

  const insights: Insight[] = [];

  const marketStatusInsight =
    generateMarketStatusInsight(claims);

  if (marketStatusInsight) {
    insights.push(marketStatusInsight);
  }

  const analysisConfidenceInsight =
    generateAnalysisConfidenceInsight(claims);

  if (analysisConfidenceInsight) {
    insights.push(analysisConfidenceInsight);
  }

  const tradeRiskInsight =
    generateTradeRiskInsight(claims);

  if (tradeRiskInsight) {
    insights.push(tradeRiskInsight);
  }

  const marketBiasInsight =
    generateMarketBiasInsight(claims);

  if (marketBiasInsight) {
    insights.push(marketBiasInsight);
  }

  return insights;
}