export interface FreePlanView {
  executive_summary: string;

  market_structure: string;

  scenarios: {
    bullish_case: string;
    bearish_case: string;
  };

  key_levels: {
    supports: string[];
    resistances: string[];
    decision_zones: string[];
  };

  market_status: string;
}

export interface EconomicPlanView extends FreePlanView {
  entries: {
    aggressive_entry: number | null;
    conservative_entry: number | null;
  };

  targets: {
    target_1: number | null;
    target_2: number | null;
    target_3: number | null;
  };

  stop_loss: number | null;

  risk_reward: number | null;

  indicator_confirmation: {
    confidence_score: number;
    signal_alignment: string;
    indicator_summary: string;
  };
}

export interface PremiumPlanView extends EconomicPlanView {
  capital_management: string;

  position_management: string;

  trade_plan: string;

  special_notes: {
    profit_taking_plan: string;
    stop_loss_management: string;
  };
}

export interface PlanLayerOutput {
  free: FreePlanView;

  economic: EconomicPlanView;

  premium: PremiumPlanView;
}