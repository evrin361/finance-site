import { runMergeEngine } from "../engines/mergeEngine";
import { SMCAnalysisObject } from "../types/SMCAnalysisObject";
import { IndicatorConfirmationObject } from "../types/IndicatorConfirmationObject";

const smc: SMCAnalysisObject = {
  analysis_id: "test-001",
  created_at: new Date().toISOString(),
  analysis_date: new Date().toISOString(),

  market: "crypto",
  symbol: "BTCUSDT",
  timeframe: "1d",

  market_structure: "bullish",
  trend: "bullish",

  BOS: ["BOS detected"],
  CHOCH: [],

  buy_side_liquidity: [],
  sell_side_liquidity: [],
  liquidity_targets: [],

  market_phase: "expansion",
  smart_money_behavior: "bullish",
  whale_activity: "active",

  bullish_order_blocks: [],
  bearish_order_blocks: [],

  fvg_zones: [],
  imbalance_zones: [],

  support_levels: [],
  resistance_levels: [],
  decision_zones: [],
  critical_levels: [],

  aggressive_entry: null,
  conservative_entry: null,

  stop_loss: null,

  target_1: null,
  target_2: null,
  target_3: null,

  risk_reward: null,

  capital_management: "",
  position_sizing: "",

  bullish_case: "",
  bearish_case: "",

  trade_plan: "",
  profit_taking_plan: "",
  stop_loss_management: "",
  position_management: "",

  mid_term_bullish_probability: 60,
  mid_term_neutral_probability: 20,
  mid_term_bearish_probability: 20,

  mid_term_summary: "",

  long_term_bullish_probability: 70,
  long_term_neutral_probability: 20,
  long_term_bearish_probability: 10,

  long_term_summary: "",

  bullish_invalidation: "",
  bearish_invalidation: "",
  invalidation_reason: "",

  executive_summary:
    "Bullish market structure remains valid.",

  market_status: "Bullish Continuation",

  analysis_confidence: 85,

  trade_risk: "low",
};

const confirmation: IndicatorConfirmationObject = {
  confidence_score: 85,

  signal_alignment: "bullish",

  bullish_signals: 6,
  bearish_signals: 1,
  neutral_signals: 2,

  warnings: [],

  indicator_summary:
    "Strong bullish confirmation.",
};

const result =
  runMergeEngine(
    smc,
    confirmation
  );

console.log(
  JSON.stringify(
    result,
    null,
    2
  )
);