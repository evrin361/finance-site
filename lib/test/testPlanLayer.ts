import { runMergeEngine } from "../engines/mergeEngine";
import { buildPlanLayers } from "../engines/planLayerEngine";

import {
  smc,
  confirmation,
} from "./testMergeEngine";

const masterAnalysis =
  runMergeEngine(
    smc,
    confirmation
  );

const plans =
  buildPlanLayers(masterAnalysis);

console.log(
  JSON.stringify(
    plans,
    null,
    2
  )
);