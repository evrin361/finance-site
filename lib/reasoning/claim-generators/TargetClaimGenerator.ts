import { Finding } from "@/lib/types/Finding";
import { Claim } from "@/lib/types/Claim";

export function generateTargetClaim(
  findings: Finding[]
): Claim | null {

  const targetFinding = findings.find(
    (f) => f.type === "TARGET"
  );

  if (!targetFinding) {
    return null;
  }

  return {
    id: crypto.randomUUID(),

    type: "TARGET",

    result: "Profit targets identified.",

    confidence: 87,

    supportingFindings: [targetFinding],
  };

}