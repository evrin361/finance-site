import { IndicatorObject } from "@/lib/types/IndicatorObject";
import { Finding } from "@/lib/types/Finding";
import { mapEmaFinding } from "./mapEmaFinding";

import { mapRsiFinding } from "./mapRsiFinding";
import { mapMacdFinding } from "./mapMacdFinding";
import { mapAtrFinding } from "./mapAtrFinding";

import { mapVolumeFinding } from "./mapVolumeFinding";
import { mapBollingerFinding } from "./mapBollingerFinding";
import { mapStochasticFinding } from "./mapStochasticFinding";

export function mapIndicatorFindings(
  indicators: IndicatorObject
): Finding[] {

  return [

  ...mapRsiFinding(indicators),

  ...mapEmaFinding(indicators),

  ...mapMacdFinding(indicators),

  ...mapAtrFinding(indicators),

  ...mapVolumeFinding(indicators),

  ...mapBollingerFinding(indicators),
  
  ...mapStochasticFinding(indicators),



];
}