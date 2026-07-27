import { Finding } from "@/lib/types/Finding";
import { Claim } from "@/lib/types/Claim";

export function generateFVGClaim(
  findings: Finding[]
): Claim | null {

  const fvg = findings.find(
    (f) => f.type === "FVG"
  );

  if (!fvg) {
    return null;
  }

  return {
    id: crypto.randomUUID(),

    type: "FVG",

    result: "Fair Value Gap detected.",

    confidence: 80,

    supportingFindings: [fvg],
  };
}