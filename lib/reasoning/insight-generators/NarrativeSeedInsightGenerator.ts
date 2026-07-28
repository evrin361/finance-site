import { Claim } from "@/lib/types/Claim";
import { Insight } from "@/lib/types/Insight";

export function generateNarrativeSeedInsight(
  claims: Claim[]
): Insight | null {

  if (claims.length === 0) {
    return null;
  }

  return null;

}