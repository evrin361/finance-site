import { Claim } from "@/lib/types/Claim";
import { Finding } from "@/lib/types/Finding";

type OrderBlockPayload = {
  bullish: string[];
  bearish: string[];
};

export function generateOrderBlockClaim(
  findings: Finding[]
): Claim | null {

  const finding = findings.find(
    (f) => f.type === "ORDER_BLOCK"
  );

  if (!finding) {
    return null;
  }

  const payload =
    finding.payload as OrderBlockPayload;

  return {
    id: crypto.randomUUID(),

    type: "ORDER_BLOCK_CLAIM",

    result:
      payload.bullish.length > 0
        ? "BULLISH_OB_PRESENT"
         : "BEARISH_OB_PRESENT",

    confidence: 90,

    supportingFindings: [finding],
  };
}