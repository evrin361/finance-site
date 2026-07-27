import { Claim } from "@/lib/types/Claim";
import { Finding } from "@/lib/types/Finding";

type MarketStructurePayload = {
  trend: string;
};

export function generateTrendClaim(
  findings: Finding[]
): Claim | null {

  const marketStructure = findings.find(
    f => f.type === "MARKET_STRUCTURE"
  );

  if (!marketStructure) {
    return null;
  }

const trend = (
  marketStructure.payload as MarketStructurePayload
).trend;

  return {

    id: crypto.randomUUID(),

    type: "TREND",

    result: trend,

    confidence: 70,

    supportingFindings: [
      marketStructure,
    ],

  };

}