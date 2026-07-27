import { Finding } from "@/lib/types/Finding";
import { Claim } from "@/lib/types/Claim";

export function generateSmartMoneyClaim(
  findings: Finding[]
): Claim | null {

  const smartMoney = findings.find(
    (f) => f.type === "SMART_MONEY"
  );

  if (!smartMoney) {
    return null;
  }

  return {

    id: crypto.randomUUID(),

    type: "SMART_MONEY",

    result: "Smart Money behavior identified.",

    confidence: 90,

    supportingFindings: [smartMoney],

  };

}