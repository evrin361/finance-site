import { Finding } from "@/lib/types/Finding";
import { Claim } from "@/lib/types/Claim";

export function generateEntryClaim(
  findings: Finding[]
): Claim | null {

  const entryFinding = findings.find(
    (f) => f.type === "ENTRY"
  );

  if (!entryFinding) {
    return null;
  }

  return {
    id: crypto.randomUUID(),

    type: "ENTRY",

    result: "Valid entry zone identified.",

    confidence: 88,

    supportingFindings: [entryFinding],
  };

}