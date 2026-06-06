import { SMCOutput } from "./engine1";
import { KeyLevelsOutput } from "../types/KeyLevelsOutput";

export function generateKeyLevels(
  engineOutput: SMCOutput
): KeyLevelsOutput {

  return {
    supportLevels: [],
    resistanceLevels: [],
    decisionZones: [],
    criticalLevels: [],
  };

}