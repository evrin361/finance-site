import { Candle } from "@/lib/normalizer/normalizeCandle";
import { SMCAnalysisObject } from "@/lib/types/SMCAnalysisObject";
import { runSMCEngine } from "@/lib/engines/engine1";
import { generateMidTermAnalysis } from "@/lib/engines/midTermAnalysisEngine";

export function generateSMCAnalysis(symbol: string, candles: Candle[]): SMCAnalysisObject {
  // اجرای Skeleton موتور 1
  const engineOutput = runSMCEngine(symbol, candles);

const midTermAnalysis = generateMidTermAnalysis(engineOutput);

  // تبدیل به SMCAnalysisObject
  const analysis: SMCAnalysisObject = {
    analysis_id: `SMC-${Date.now()}`,
    created_at: new Date().toISOString(),
    analysis_date: new Date().toISOString(),
    market: "Crypto",
    symbol: symbol,
    timeframe: "1D",
    
    market_structure: engineOutput.marketStructure,
    trend: engineOutput.trend,
    BOS: engineOutput.BOS,
    CHOCH: engineOutput.CHOCH,

    buy_side_liquidity: engineOutput.buySideLiquidity,
    sell_side_liquidity: engineOutput.sellSideLiquidity,
    liquidity_targets: engineOutput.liquidityTargets,

    market_phase: engineOutput.marketPhase,
    smart_money_behavior: engineOutput.smartMoneyBehavior,
    whale_activity: engineOutput.whaleActivity,

    bullish_order_blocks: engineOutput.bullishOrderBlocks,
    bearish_order_blocks: engineOutput.bearishOrderBlocks,

    fvg_zones: engineOutput.FVGZones,
    imbalance_zones: engineOutput.imbalanceZones,

    aggressive_entry: engineOutput.aggressiveEntry,
    conservative_entry: engineOutput.conservativeEntry,

    stop_loss: engineOutput.stopLoss,

    target_1: engineOutput.target1,
    target_2: engineOutput.target2,
    target_3: engineOutput.target3,

    risk_reward: engineOutput.riskReward,

    capital_management: engineOutput.capitalManagement,
    position_sizing: engineOutput.positionSizing,

    bullish_case: engineOutput.bullishScenario,
    bearish_case: engineOutput.bearishScenario,

    trade_plan: engineOutput.tradePlan,
    profit_taking_plan: engineOutput.profitTakingPlan,
    stop_loss_management: engineOutput.stopLossManagement,
    position_management: engineOutput.positionManagement,

    mid_term_bullish_probability:
  midTermAnalysis.bullishProbability,

mid_term_neutral_probability:
  midTermAnalysis.neutralProbability,

mid_term_bearish_probability:
  midTermAnalysis.bearishProbability,

mid_term_summary:
  midTermAnalysis.summary,

    long_term_bullish_probability: 50,
    long_term_neutral_probability: 0,
    long_term_bearish_probability: 50,
    long_term_summary: "Initial Skeleton",

    bullish_invalidation: "",
    bearish_invalidation: "",

    executive_summary: "Initial Skeleton Analysis",

    market_status: "Neutral",
    analysis_confidence: 50,
    trade_risk: "Medium",
  };

  return analysis;
}