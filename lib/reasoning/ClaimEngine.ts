import { Finding } from "@/lib/types/Finding";
import { Claim } from "@/lib/types/Claim";
import { generateTrendClaim } from "./claim-generators/TrendClaimGenerator";
import { generateLiquidityClaim } from "./claim-generators/LiquidityClaimGenerator";
import { generateOrderBlockClaim } from "./claim-generators/OrderBlockClaimGenerator";
import { generateFVGClaim } from "./claim-generators/FVGClaimGenerator";
import { generateSmartMoneyClaim } from "./claim-generators/SmartMoneyClaimGenerator";
import { generateEntryClaim } from "./claim-generators/EntryClaimGenerator";
import { generateTargetClaim } from "./claim-generators/TargetClaimGenerator";
import { generateRiskRewardClaim } from "./claim-generators/RiskRewardClaimGenerator";

export function generateClaims(
  findings: Finding[]
): Claim[] {

  const claims: Claim[] = [];

  const trendClaim = generateTrendClaim(findings);

  if (trendClaim) {
    claims.push(trendClaim);
  }


  const liquidityClaim = generateLiquidityClaim(findings);

if (liquidityClaim) {
  claims.push(liquidityClaim);
}


const orderBlockClaim =
  generateOrderBlockClaim(findings);

if (orderBlockClaim) {
  claims.push(orderBlockClaim);
}
const fvgClaim =
  generateFVGClaim(findings);

if (fvgClaim) {
  claims.push(fvgClaim);
}

const smartMoneyClaim =
  generateSmartMoneyClaim(findings);

if (smartMoneyClaim) {
  claims.push(smartMoneyClaim);
}

const entryClaim =
  generateEntryClaim(findings);

if (entryClaim) {
  claims.push(entryClaim);
}

const targetClaim =
  generateTargetClaim(findings);

if (targetClaim) {
  claims.push(targetClaim);
}

const riskRewardClaim =
  generateRiskRewardClaim(findings);

if (riskRewardClaim) {
  claims.push(riskRewardClaim);
}

  return claims;

}