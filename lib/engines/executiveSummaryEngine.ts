import { SMCOutput } from "./engine1";
import { ConfidenceOutput } from "../types/ConfidenceOutput";
import { RiskOutput } from "../types/RiskOutput";

export function generateExecutiveSummaryV2(
  engineOutput: SMCOutput,
  confidenceOutput: ConfidenceOutput,
  riskOutput: RiskOutput
) {
  const supportLevels = engineOutput.supportLevels.join(", ") || "None";
  const resistanceLevels = engineOutput.resistanceLevels.join(", ") || "None";
  const decisionZones = engineOutput.decisionZones.join(", ") || "None";
  const criticalLevels = engineOutput.criticalLevels.join(", ") || "None";

  const summary = `
Market Structure:
${engineOutput.marketStructure}

Trend:
${engineOutput.trend}

Market Phase:
${engineOutput.marketPhase}

Long Term Outlook:
Bullish ${engineOutput.longTermBullishProbability}%
Neutral ${engineOutput.longTermNeutralProbability}%
Bearish ${engineOutput.longTermBearishProbability}%

Long Term Summary:
${engineOutput.longTermSummary}

Support Levels:
${supportLevels}

Resistance Levels:
${resistanceLevels}

Decision Zones:
${decisionZones}

Critical Levels:
${criticalLevels}

Trade Plan:
${engineOutput.tradePlan}

Profit Taking Plan:
${engineOutput.profitTakingPlan}

Position Management:
${engineOutput.positionManagement}

Capital Management:
${engineOutput.capitalManagement}

Invalidation:
Bullish: ${engineOutput.bullishInvalidation}
Bearish: ${engineOutput.bearishInvalidation}
Reason: ${engineOutput.invalidationReason}

Confidence:
${confidenceOutput.confidenceLevel}% - ${confidenceOutput.confidenceReason}

Risk:
${riskOutput.riskScore}% - ${riskOutput.riskReason}

Market Status:
${riskOutput.marketStatus}
`.trim();

  return { summary };
}