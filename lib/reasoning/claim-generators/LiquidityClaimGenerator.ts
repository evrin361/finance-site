import { Claim } from "@/lib/types/Claim";
import { Finding } from "@/lib/types/Finding";

type LiquidityPayload = {
  buy_side: string[];
  sell_side: string[];
  targets: string[];
};

export function generateLiquidityClaim(
  findings: Finding[]
): Claim | null {

  const liquidityFinding = findings.find(
    (f) => f.type === "LIQUIDITY"
  );

  if (!liquidityFinding) {
    return null;
  }

  const payload =
    liquidityFinding.payload as LiquidityPayload;

return {
  id: crypto.randomUUID(),

  type: "LIQUIDITY_CLAIM",

  result:
    payload.buy_side.length >
    payload.sell_side.length
      ? "BUY_SIDE_DOMINANT"
      : "SELL_SIDE_DOMINANT",

  confidence: 90,

  supportingFindings: [liquidityFinding],
};
}