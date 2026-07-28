import { Finding } from "@/lib/types/Finding";
import { Claim } from "@/lib/types/Claim";

type FVGPayload = {
  bullish: string[];
  bearish: string[];
};

export function generateFVGClaim(
  findings: Finding[]
): Claim | null {

  const fvg = findings.find(
    (f) => f.type === "FVG"
  );

  if (!fvg) {
    return null;
  }

  const payload =
    fvg.payload as FVGPayload;

  return {
    id: crypto.randomUUID(),

    type: "FVG",

    result:
      payload.bullish.length > 0
        ? "BULLISH_FVG_PRESENT"
        : "BEARISH_FVG_PRESENT",

    confidence: 80,

    supportingFindings: [fvg],
  };
}