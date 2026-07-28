import { Finding } from "@/lib/types/Finding";
import { Claim } from "@/lib/types/Claim";

type SmartMoneyPayload = {
  phase: string;
};

export function generateSmartMoneyClaim(
  findings: Finding[]
): Claim | null {

  const smartMoney = findings.find(
    (f) => f.type === "SMART_MONEY"
  );

  if (!smartMoney) {
    return null;
  }

  const payload =
    smartMoney.payload as SmartMoneyPayload;

  return {

    id: crypto.randomUUID(),

    type: "SMART_MONEY",

    result: payload.phase,

    confidence: 90,

    supportingFindings: [smartMoney],

  };

}