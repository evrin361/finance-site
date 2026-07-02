import { SMCAnalysisObject } from "../types/SMCAnalysisObject";
import { IndicatorObject } from "../types/IndicatorObject";
import { IndicatorConfirmationObject } from "../types/IndicatorConfirmationObject";
import { MasterAnalysisObject } from "../types/MasterAnalysisObject";
import { PlanLayerOutput } from "../types/PlanLayerOutput";
import { Candle } from "../types/Candle";

import { runSMCEngine } from "./engine1";
import { runEngine2 } from "./engine2";
import { runMergeEngine } from "./mergeEngine";
import { buildPlanLayers } from "./planLayerEngine";

import { mapSMCOutputToAnalysisObject }
from "../mappers/smcAnalysisMapper";

import { mapIndicatorObject }
from "../mappers/indicatorMapper";

import { mapIndicatorConfirmation }
from "../mappers/indicatorConfirmationMapper";
import { validatePipelineInput }
from "./pipelineValidationEngine";

export interface AnalysisPipelineInput {
  market: string;
  symbol: string;
  timeframe: string;

  candles: {
    open: number[];
    high: number[];
    low: number[];
    close: number[];
    volume: number[];
  };
}

export interface AnalysisPipelineOutput {
  smc: SMCAnalysisObject;

  indicators: IndicatorObject;

  confirmation: IndicatorConfirmationObject;

  master: MasterAnalysisObject;

  plans: PlanLayerOutput;
}

export async function runAnalysisPipeline(
  input: AnalysisPipelineInput
): 
Promise<AnalysisPipelineOutput> {
validatePipelineInput(input);
  const candles: Candle[] =
  input.candles.close.map((_, i) => ({
    timestamp: i,
    open: input.candles.open[i],
    high: input.candles.high[i],
    low: input.candles.low[i],
    close: input.candles.close[i],
    volume: input.candles.volume[i],
  }));
  const smcOutput =
  runSMCEngine(
    input.symbol,
    candles
  );
  const smc =
  mapSMCOutputToAnalysisObject(
    smcOutput,
    {
      market: input.market,
      symbol: input.symbol,
      timeframe: input.timeframe,
    }
  );

const {
    indicators,
    confirmation,
} = runEngine2({
    candles: input.candles,
});

const master =
  runMergeEngine(
    smc,
    confirmation
  );
 const plans =
  buildPlanLayers(master);
 return {
  smc,
  indicators,
  confirmation,
  master,
  plans,
};  
}