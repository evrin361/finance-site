import { SMCOutput } from "./engine1";
import { MidTermAnalysisOutput } from "../types/MidTermAnalysisOutput";

export function generateMidTermAnalysis(
  engineOutput: SMCOutput
): MidTermAnalysisOutput {

  return {
    bullishProbability: 50,
    neutralProbability: 0,
    bearishProbability: 50,
    summary: "Initial Skeleton",
  };
}
