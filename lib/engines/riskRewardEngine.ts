// lib/engines/riskRewardEngine.ts
import { SMCOutput } from "./engine1";

export interface RiskRewardOutput {
  entries: {
    aggressive: number | null;
    conservative: number | null;
  };
  stopLoss: number | null;
  targets: {
    target1: number | null;
    target2: number | null;
    target3: number | null;
  };
  riskReward: number | null; // نسبت ریسک/سود
}

export function calculateRiskReward(engineOutput: SMCOutput): RiskRewardOutput {
  // متغیرهای اولیه
  let aggressive: number | null = null;
  let conservative: number | null = null;
  let stopLoss: number | null = null;
  let target1: number | null = null;
  let target2: number | null = null;
  let target3: number | null = null;
  let riskReward: number | null = null;

  // 🚀 مثال ساده محاسبه بر اساس Order Block و FVG
  const bullishOB = engineOutput.bullishOrderBlocks[engineOutput.bullishOrderBlocks.length - 1];
  const bearishOB = engineOutput.bearishOrderBlocks[engineOutput.bearishOrderBlocks.length - 1];
  const lastFVG = engineOutput.FVGZones[engineOutput.FVGZones.length - 1];

  // فرضیه اولیه: اگر بازار Bullish
  if (engineOutput.trend === "Bullish") {
    aggressive = bullishOB ? parseFloat(bullishOB.match(/(\d+(\.\d+)?)/)?.[0] || "") : null;
    conservative = lastFVG ? parseFloat(lastFVG.match(/(\d+(\.\d+)?)/)?.[0] || "") : null;
    stopLoss = aggressive ? aggressive - 100 : null; // مثال ساده: 100 واحد پایین‌تر
    target1 = aggressive ? aggressive + 100 : null;
    target2 = aggressive ? aggressive + 200 : null;
    target3 = aggressive ? aggressive + 300 : null;
  }

  // اگر بازار Bearish
  if (engineOutput.trend === "Bearish") {
    aggressive = bearishOB ? parseFloat(bearishOB.match(/(\d+(\.\d+)?)/)?.[0] || "") : null;
    conservative = lastFVG ? parseFloat(lastFVG.match(/(\d+(\.\d+)?)/)?.[0] || "") : null;
    stopLoss = aggressive ? aggressive + 100 : null; // مثال ساده: 100 واحد بالاتر
    target1 = aggressive ? aggressive - 100 : null;
    target2 = aggressive ? aggressive - 200 : null;
    target3 = aggressive ? aggressive - 300 : null;
  }

  // نسبت ساده ریسک/سود
  if (aggressive && stopLoss && target1) {
    riskReward = Math.abs((target1 - aggressive) / (aggressive - stopLoss));
  }

  return {
    entries: {
      aggressive,
      conservative,
    },
    stopLoss,
    targets: {
      target1,
      target2,
      target3,
    },
    riskReward,
  };
}