import { Finding } from "./Finding";

export interface Claim {

  id: string;

  type: string;

  result: string;

  confidence: number;

  supportingFindings: Finding[];

}