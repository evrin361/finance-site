import { Finding } from "@/lib/types/Finding";
import { Claim } from "@/lib/types/Claim";

export function generateRiskRewardClaim(
  findings: Finding[]
): Claim | null {

  const rrFinding = findings.find(
    (f) => f.type === "RISK_REWARD"
  );

  if (!rrFinding) {
    return null;
  }

  return {
    id: crypto.randomUUID(),

    type: "RISK_REWARD",

    result: "Risk-to-reward profile evaluated.",

    confidence: 90,

    supportingFindings: [rrFinding],
  };

}