import { SMCOutput } from "./engine1";

export interface ExecutiveSummaryOutput {
  summary: string;
}

export function generateExecutiveSummaryV2(
  engineOutput: SMCOutput
): ExecutiveSummaryOutput {

  const reasons: string[] = [];

  if (engineOutput.bullishInvalidation) {
    reasons.push(engineOutput.bullishInvalidation);
  }

  if (engineOutput.bearishInvalidation) {
    reasons.push(engineOutput.bearishInvalidation);
  }

  if (engineOutput.invalidationReason) {
    reasons.push(engineOutput.invalidationReason);
  }

  const reasonSummary =
    reasons.length > 0
      ? reasons.join(" | ")
      : "No invalidation detected";

  const supportLevels =
    engineOutput.supportLevels?.length > 0
      ? engineOutput.supportLevels.join(", ")
      : "None";

  const resistanceLevels =
    engineOutput.resistanceLevels?.length > 0
      ? engineOutput.resistanceLevels.join(", ")
      : "None";

  const decisionZones =
    engineOutput.decisionZones?.length > 0
      ? engineOutput.decisionZones.join(", ")
      : "None";

  const criticalLevels =
    engineOutput.criticalLevels?.length > 0
      ? engineOutput.criticalLevels.join(", ")
      : "None";

  const summary = `
Market Structure:
${engineOutput.marketStructure}

Trend:
${engineOutput.trend}خب نا

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
${reasonSummary}
`.trim();

  return {
    summary,
  };
}