import { MasterAnalysisObject } from "../types/MasterAnalysisObject";
import { PlanLayerOutput } from "../types/PlanLayerOutput";

export function buildPlanLayers(
  analysis: MasterAnalysisObject
): PlanLayerOutput {
  return {
    free: {
      executive_summary: analysis.smc.executive_summary,

      market_structure: analysis.smc.market_structure,

      scenarios: {
        bullish_case: analysis.smc.bullish_case,
        bearish_case: analysis.smc.bearish_case,
      },

      key_levels: {
        supports: analysis.smc.support_levels,
        resistances: analysis.smc.resistance_levels,
        decision_zones: analysis.smc.decision_zones,
      },

      market_status: analysis.smc.market_status,
    },

    economic: {
      executive_summary: analysis.smc.executive_summary,

      market_structure: analysis.smc.market_structure,

      scenarios: {
        bullish_case: analysis.smc.bullish_case,
        bearish_case: analysis.smc.bearish_case,
      },

      key_levels: {
        supports: analysis.smc.support_levels,
        resistances: analysis.smc.resistance_levels,
        decision_zones: analysis.smc.decision_zones,
      },

      market_status: analysis.smc.market_status,

      entries: {
        aggressive_entry: analysis.smc.aggressive_entry,
        conservative_entry: analysis.smc.conservative_entry,
      },

      targets: {
        target_1: analysis.smc.target_1,
        target_2: analysis.smc.target_2,
        target_3: analysis.smc.target_3,
      },

      stop_loss: analysis.smc.stop_loss,

      risk_reward: analysis.smc.risk_reward,

      indicator_confirmation: {
        confidence_score: analysis.confirmation.confidence_score,
        signal_alignment: analysis.confirmation.signal_alignment,
        indicator_summary:
          analysis.confirmation.indicator_summary,
      },
    },

    premium: {
      executive_summary: analysis.smc.executive_summary,

      market_structure: analysis.smc.market_structure,

      scenarios: {
        bullish_case: analysis.smc.bullish_case,
        bearish_case: analysis.smc.bearish_case,
      },

      key_levels: {
        supports: analysis.smc.support_levels,
        resistances: analysis.smc.resistance_levels,
        decision_zones: analysis.smc.decision_zones,
      },

      market_status: analysis.smc.market_status,

      entries: {
        aggressive_entry: analysis.smc.aggressive_entry,
        conservative_entry: analysis.smc.conservative_entry,
      },

      targets: {
        target_1: analysis.smc.target_1,
        target_2: analysis.smc.target_2,
        target_3: analysis.smc.target_3,
      },

      stop_loss: analysis.smc.stop_loss,

      risk_reward: analysis.smc.risk_reward,

      indicator_confirmation: {
        confidence_score: analysis.confirmation.confidence_score,
        signal_alignment: analysis.confirmation.signal_alignment,
        indicator_summary:
          analysis.confirmation.indicator_summary,
      },

      capital_management:
        analysis.smc.capital_management,

      position_management:
        analysis.smc.position_management,

      trade_plan:
        analysis.smc.trade_plan,

      special_notes: {
        profit_taking_plan:
          analysis.smc.profit_taking_plan,

        stop_loss_management:
          analysis.smc.stop_loss_management,
      },
    },
  };
}