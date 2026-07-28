import { Claim } from "./Claim";

export interface Insight {

  id: string;

  type: string;

  result: string;

  confidence: number;

  supportingClaims: Claim[];

}