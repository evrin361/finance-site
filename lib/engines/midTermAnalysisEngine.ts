import { SMCOutput } from "./engine1";
import { MidTermAnalysisOutput } from "../types/MidTermAnalysisOutput";

export function generateMidTermAnalysis(
  engineOutput: SMCOutput
): MidTermAnalysisOutput {

  let bullishScore = 0;
  let bearishScore = 0;
  let neutralScore = 0;

  // Trend Analysis
  if (engineOutput.trend === "Bullish") {
    bullishScore += 30;
  } else if (engineOutput.trend === "Bearish") {
    bearishScore += 30;
  } else {
    neutralScore += 30;
  }

  // Market Structure Analysis
  if (engineOutput.marketStructure === "Bullish") {
    bullishScore += 20;
  } else if (engineOutput.marketStructure === "Bearish") {
    bearishScore += 20;
  } else {
    neutralScore += 20;
  }

  // BOS Analysis
  const bullishBOS =
    engineOutput.BOS.filter(x => x.includes("Bullish")).length;

  const bearishBOS =
    engineOutput.BOS.filter(x => x.includes("Bearish")).length;

  if (bullishBOS > bearishBOS) {
    bullishScore += 15;
  } else if (bearishBOS > bullishBOS) {
    bearishScore += 15;
  }

  // CHOCH Analysis
  const bullishCHOCH =
    engineOutput.CHOCH.filter(x => x.includes("Bullish")).length;

  const bearishCHOCH =
    engineOutput.CHOCH.filter(x => x.includes("Bearish")).length;

  if (bullishCHOCH > bearishCHOCH) {
    bullishScore += 10;
  } else if (bearishCHOCH > bullishCHOCH) {
    bearishScore += 10;
  }

  // Order Blocks
  if (engineOutput.bullishOrderBlocks.length > 0) {
    bullishScore += 10;
  }

  if (engineOutput.bearishOrderBlocks.length > 0) {
    bearishScore += 10;
  }

  // FVG Analysis
  const bullishFVG =
    engineOutput.FVGZones.filter(x => x.includes("Bullish")).length;

  const bearishFVG =
    engineOutput.FVGZones.filter(x => x.includes("Bearish")).length;

  if (bullishFVG > bearishFVG) {
    bullishScore += 15;
  } else if (bearishFVG > bullishFVG) {
    bearishScore += 15;
  }

  const total =
    bullishScore +
    bearishScore +
    neutralScore;

  const bullishProbability =
    Math.round((bullishScore / total) * 100);

  const bearishProbability =
    Math.round((bearishScore / total) * 100);

  const neutralProbability =
    100 -
    bullishProbability -
    bearishProbability;

  let summary = "";

  if (
    bearishProbability >
    bullishProbability
  ) {
    summary =
      "Mid-term market bias remains bearish.";
  } else if (
    bullishProbability >
    bearishProbability
  ) {
    summary =
      "Mid-term market bias remains bullish.";
  } else {
    summary =
      "Mid-term market bias remains neutral.";
  }

  return {
    bullishProbability,
    neutralProbability,
    bearishProbability,
    summary,
  };
}