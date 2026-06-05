import { Candle } from "@/lib/normalizer/normalizeCandle";
import { detectBOS } from "./detectBOS";
import { detectCHOCH } from "./detectCHOCH";
import { detectLiquidity } from "./detectLiquidity";
import { detectOrderBlocks } from "./detectOrderBlocks";
import { detectFVG } from "./detectFVG";
import { detectSmartMoneyBehavior } from "./detectSmartMoneyBehavior";
import { detectMarketStructure } from "./detectMarketStructure";
import { detectTrend } from "./detectTrend";
import { generateScenarios } from "./scenarioGenerator";
import { calculateRiskReward } from "./riskRewardEngine";
import { generateTradePlan } from "./tradePlanningEngine";

export interface SMCOutput {
  marketStructure: string;
  trend: string;
  BOS: string[];
  CHOCH: string[];
  buySideLiquidity: string[];
  sellSideLiquidity: string[];
  liquidityTargets: string[];
  marketPhase: string;
  smartMoneyBehavior: string;
  whaleActivity: string;
  bullishOrderBlocks: string[];
  bearishOrderBlocks: string[];
  FVGZones: string[];
  imbalanceZones: string[];
  aggressiveEntry: number | null;
  conservativeEntry: number | null;
  stopLoss: number | null;
  target1: number | null;
  target2: number | null;
  target3: number | null;
  riskReward: number | null;
  capitalManagement: string;
  positionSizing: string;
  bullishScenario: string;
  bearishScenario: string;
  tradePlan: string;
  profitTakingPlan: string;
  stopLossManagement: string;
  positionManagement: string;
  marketStatus: string;
  confidenceLevel: number;
  whyAnalysis: string;
}

export function runSMCEngine(symbol: string, candles: Candle[]): SMCOutput {
  const BOS = detectBOS(candles);
  const CHOCH = detectCHOCH(candles);
  const liquidity = detectLiquidity(candles);
  const orderBlocks = detectOrderBlocks(candles, liquidity);
  const FVGZones = detectFVG(candles);
  const smartMoney = detectSmartMoneyBehavior(candles);
  const marketStructureData = detectMarketStructure(candles);
const trendData = detectTrend(
  candles,
  marketStructureData.marketStructure as "Bullish" | "Bearish" | "Range",
  BOS,
  CHOCH
);

// تولید سناریوها با استفاده از خروجی Engine1
const scenarios = generateScenarios({
  marketStructure: marketStructureData.marketStructure,
  trend: trendData.trend,
  BOS,
  CHOCH,
  buySideLiquidity: liquidity.buySideLiquidity,
  sellSideLiquidity: liquidity.sellSideLiquidity,
  liquidityTargets: [],
  marketPhase: smartMoney.marketPhase,
  smartMoneyBehavior: smartMoney.smartMoneyBehavior,
  whaleActivity: smartMoney.whaleActivity,
  bullishOrderBlocks: orderBlocks.bullishOrderBlocks,
  bearishOrderBlocks: orderBlocks.bearishOrderBlocks,
  FVGZones,
  imbalanceZones: [],
  aggressiveEntry: null,
  conservativeEntry: null,
  stopLoss: null,
  target1: null,
  target2: null,
  target3: null,
  riskReward: null,
  capitalManagement: "Not Calculated",
  positionSizing: "Not Calculated",
  bullishScenario: "None",
  bearishScenario: "None",
  tradePlan: "None",
  profitTakingPlan: "None",
  stopLossManagement: "None",
  positionManagement: "None",
  marketStatus: "Neutral",
  confidenceLevel: 50,
  whyAnalysis: "Initial Skeleton",
});


  console.log("🔥 BOS DETECTED:");
  console.log(BOS);

  console.log("🔥 CHOCH DETECTED:");
  console.log(CHOCH);

  console.log("🔥 LIQUIDITY DETECTED:");
  console.log("Buy Side Liquidity:", liquidity.buySideLiquidity);
  console.log("Sell Side Liquidity:", liquidity.sellSideLiquidity);

  console.log("🔥 ORDER BLOCKS DETECTED:");
  console.log("Bullish Order Blocks:", orderBlocks.bullishOrderBlocks);
  console.log("Bearish Order Blocks:", orderBlocks.bearishOrderBlocks);

  console.log("🔥 FVG DETECTED:");
  console.log(FVGZones);

  console.log("🔥 SMART MONEY DETECTED:");
  console.log(JSON.stringify(smartMoney, null, 2));

  console.log("🔥 MARKET STRUCTURE DETECTED:");
  console.log(JSON.stringify(marketStructureData, null, 2));


console.log("🔥 TREND DETECTED:");
console.log(JSON.stringify(trendData, null, 2));

// تولید خروجی Risk/Reward
const riskRewardOutput = calculateRiskReward({
  marketStructure: marketStructureData.marketStructure,
  trend: trendData.trend,
  BOS,
  CHOCH,
  buySideLiquidity: liquidity.buySideLiquidity,
  sellSideLiquidity: liquidity.sellSideLiquidity,
  liquidityTargets: [],
  marketPhase: smartMoney.marketPhase,
  smartMoneyBehavior: smartMoney.smartMoneyBehavior,
  whaleActivity: smartMoney.whaleActivity,
  bullishOrderBlocks: orderBlocks.bullishOrderBlocks,
  bearishOrderBlocks: orderBlocks.bearishOrderBlocks,
  FVGZones,
  imbalanceZones: [],
  aggressiveEntry: null,
  conservativeEntry: null,
  stopLoss: null,
  target1: null,
  target2: null,
  target3: null,
  riskReward: null,
  capitalManagement: "Not Calculated",
  positionSizing: "Not Calculated",
  bullishScenario: scenarios[0]?.title ?? "None",
  bearishScenario: scenarios[1]?.title ?? "None",
  tradePlan: scenarios[2]?.title ?? "None",
  profitTakingPlan: "None",
  stopLossManagement: "None",
  positionManagement: "None",
  marketStatus: "Neutral",
  confidenceLevel: 50,
  whyAnalysis: "Initial Skeleton",
});
const tradePlanOutput = generateTradePlan({
  marketStructure: marketStructureData.marketStructure,
  trend: trendData.trend,
  BOS,
  CHOCH,
  buySideLiquidity: liquidity.buySideLiquidity,
  sellSideLiquidity: liquidity.sellSideLiquidity,
  liquidityTargets: [],
  marketPhase: smartMoney.marketPhase,
  smartMoneyBehavior: smartMoney.smartMoneyBehavior,
  whaleActivity: smartMoney.whaleActivity,
  bullishOrderBlocks: orderBlocks.bullishOrderBlocks,
  bearishOrderBlocks: orderBlocks.bearishOrderBlocks,
  FVGZones,
  imbalanceZones: [],
  aggressiveEntry: riskRewardOutput.entries.aggressive,
  conservativeEntry: riskRewardOutput.entries.conservative,
  stopLoss: riskRewardOutput.stopLoss,
  target1: riskRewardOutput.targets.target1,
  target2: riskRewardOutput.targets.target2,
  target3: riskRewardOutput.targets.target3,
  riskReward: riskRewardOutput.riskReward,
  capitalManagement: "Not Calculated",
  positionSizing: "Not Calculated",
  bullishScenario: scenarios[0]?.title ?? "None",
  bearishScenario: scenarios[1]?.title ?? "None",
  tradePlan: "None",
  profitTakingPlan: "None",
  stopLossManagement: "None",
  positionManagement: "None",
  marketStatus: "Neutral",
  confidenceLevel: 50,
  whyAnalysis: "Initial Skeleton",
});

  return {
    marketStructure: marketStructureData.marketStructure,
    trend: trendData.trend, // هنوز Trend Detector آماده نیست
    BOS,
    CHOCH,
    buySideLiquidity: liquidity.buySideLiquidity,
    sellSideLiquidity: liquidity.sellSideLiquidity,
    liquidityTargets: [],
    marketPhase: smartMoney.marketPhase,
    smartMoneyBehavior: smartMoney.smartMoneyBehavior,
    whaleActivity: smartMoney.whaleActivity,
    bullishOrderBlocks: orderBlocks.bullishOrderBlocks,
    bearishOrderBlocks: orderBlocks.bearishOrderBlocks,
    FVGZones,
    imbalanceZones: [],
    aggressiveEntry: riskRewardOutput.entries.aggressive,
conservativeEntry: riskRewardOutput.entries.conservative,
stopLoss: riskRewardOutput.stopLoss,
target1: riskRewardOutput.targets.target1,
target2: riskRewardOutput.targets.target2,
target3: riskRewardOutput.targets.target3,
riskReward: riskRewardOutput.riskReward,    capitalManagement: "Not Calculated",
    positionSizing: "Not Calculated",
    bullishScenario: scenarios[0]?.title ?? "None",
    bearishScenario: scenarios[1]?.title ?? "None",
    tradePlan: tradePlanOutput.tradePlan,
profitTakingPlan: tradePlanOutput.profitTakingPlan,
stopLossManagement: tradePlanOutput.stopLossManagement,
positionManagement: tradePlanOutput.positionManagement,
    marketStatus: "Neutral",
    confidenceLevel: 50,
    whyAnalysis: "Initial Skeleton",
    
  };
}