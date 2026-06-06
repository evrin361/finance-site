import { SMCOutput } from "./engine1";
import { LongTermAnalysisOutput } from "../types/LongTermAnalysisOutput";

export function generateLongTermAnalysis(
  engineOutput: any
): LongTermAnalysisOutput {

  return {
    bullishProbability: 50,
    neutralProbability: 0,
    bearishProbability: 50,
    summary: "Initial Skeleton",
  };
}