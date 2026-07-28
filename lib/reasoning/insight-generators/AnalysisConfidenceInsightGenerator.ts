import { Claim } from "@/lib/types/Claim";
import { Insight } from "@/lib/types/Insight";

const RELEVANT_CLAIMS = [
  "TREND",
  "LIQUIDITY_CLAIM",
  "SMART_MONEY",
  "ORDER_BLOCK_CLAIM",
  "FVG",
];

export function generateAnalysisConfidenceInsight(
  claims: Claim[]
): Insight | null {

  const relevantClaims = claims.filter((claim) =>
    RELEVANT_CLAIMS.includes(claim.type)
  );

  if (relevantClaims.length === 0) {
    return null;
  }

  const totalConfidence = relevantClaims.reduce(
    (sum, claim) => sum + claim.confidence,
    0
  );

  const averageConfidence = Math.round(
    totalConfidence / relevantClaims.length
  );

  return {
    id: crypto.randomUUID(),

    type: "ANALYSIS_CONFIDENCE",

    result: averageConfidence.toString(),

    confidence: averageConfidence,

    supportingClaims: relevantClaims,
  };
}