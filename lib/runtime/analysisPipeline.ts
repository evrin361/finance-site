import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { IndicatorObject } from "@/lib/types/IndicatorObject";
import { IndicatorConfirmationObject } from "@/lib/types/IndicatorConfirmationObject";
import { MasterAnalysisObject } from "@/lib/types/MasterAnalysisObject";
import { PlanLayerOutput } from "@/lib/types/PlanLayerOutput";

export interface AnalysisPipelineOutput {

  smc: SMCAnalysisObject;

  indicators: IndicatorObject;

  confirmation: IndicatorConfirmationObject;

  master: MasterAnalysisObject;

  plans: PlanLayerOutput;

}