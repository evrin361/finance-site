import { SMCOutput } from "../engines/engine1";
import { SMCAnalysisObject } from "../types/SMCAnalysisObject";

export function mapSMCOutputToAnalysisObject(
  smc: SMCOutput,
  meta: {
    market: string;
    symbol: string;
    timeframe: string;
  }
): SMCAnalysisObject {

  return {

    analysis_id:
      crypto.randomUUID(),

    created_at:
      new Date().toISOString(),

    analysis_date:
      new Date().toISOString(),

    market:
      meta.market,

    symbol:
      meta.symbol,

    timeframe:
      meta.timeframe,

    market_structure:
      smc.marketStructure,

    trend:
      smc.trend,

    BOS:
      smc.BOS,

    CHOCH:
      smc.CHOCH,

    buy_side_liquidity:
      smc.buySideLiquidity,

    sell_side_liquidity:
      smc.sellSideLiquidity,

    liquidity_targets:
      smc.liquidityTargets,

    market_phase:
      smc.marketPhase,

    smart_money_behavior:
      smc.smartMoneyBehavior,

    whale_activity:
      smc.whaleActivity,

    bullish_order_blocks:
      smc.bullishOrderBlocks,

    bearish_order_blocks:
      smc.bearishOrderBlocks,

    fvg_zones:
      smc.FVGZones,

    imbalance_zones:
      smc.imbalanceZones,

    support_levels:
      smc.supportLevels,

    resistance_levels:
      smc.resistanceLevels,

    decision_zones:
      smc.decisionZones,

    critical_levels:
      smc.criticalLevels,

    aggressive_entry:
      smc.aggressiveEntry,

    conservative_entry:
      smc.conservativeEntry,

    stop_loss:
      smc.stopLoss,

    target_1:
      smc.target1,

    target_2:
      smc.target2,

    target_3:
      smc.target3,

    risk_reward:
      smc.riskReward,

    capital_management:
      smc.capitalManagement,

    position_sizing:
      smc.positionSizing,

    bullish_case: smc.bullishScenario,
bearish_case: smc.bearishScenario,

    trade_plan:
      smc.tradePlan,

    profit_taking_plan:
      smc.profitTakingPlan,

    stop_loss_management:
      smc.stopLossManagement,

    position_management:
      smc.positionManagement,

    mid_term_bullish_probability: 0,

mid_term_neutral_probability: 0,

mid_term_bearish_probability: 0,

mid_term_summary: "",

    long_term_bullish_probability:
      smc.longTermBullishProbability,

    long_term_neutral_probability:
      smc.longTermNeutralProbability,

    long_term_bearish_probability:
      smc.longTermBearishProbability,

    long_term_summary:
      smc.longTermSummary,

    bullish_invalidation:
      smc.bullishInvalidation,

    bearish_invalidation:
      smc.bearishInvalidation,

    invalidation_reason:
      smc.invalidationReason,

    executive_summary: smc.whyAnalysis,

    market_status:
      smc.marketStatus,

analysis_confidence: smc.confidenceLevel,
   trade_risk: "medium",

  };

}