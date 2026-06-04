export interface SMCAnalysisObject {
  analysis_id: string;
  created_at: string;
  analysis_date: string;

  market: string;
  symbol: string;
  timeframe: string;

  market_structure: string;
  trend: string;
  BOS: string[];
  CHOCH: string[];

  buy_side_liquidity: string[];
  sell_side_liquidity: string[];
  liquidity_targets: string[];

  market_phase: string;
  smart_money_behavior: string;
  whale_activity: string;

  bullish_order_blocks: string[];
  bearish_order_blocks: string[];

  fvg_zones: string[];
  imbalance_zones: string[];

  aggressive_entry: number | null;
  conservative_entry: number | null;

  stop_loss: number | null;

  target_1: number | null;
  target_2: number | null;
  target_3: number | null;

  risk_reward: number | null;

  capital_management: string;
  position_sizing: string;

  bullish_case: string;
  bearish_case: string;

  trade_plan: string;
  profit_taking_plan: string;
  stop_loss_management: string;
  position_management: string;

  mid_term_bullish_probability: number;
  mid_term_neutral_probability: number;
  mid_term_bearish_probability: number;

  mid_term_summary: string;

  long_term_bullish_probability: number;
  long_term_neutral_probability: number;
  long_term_bearish_probability: number;

  long_term_summary: string;

  bullish_invalidation: string;
  bearish_invalidation: string;

  executive_summary: string;

  market_status: string;
  analysis_confidence: number;
  trade_risk: string;
}