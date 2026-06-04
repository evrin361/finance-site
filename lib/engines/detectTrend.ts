// lib/engines/detectTrend.ts
import { Candle } from "@/lib/normalizer/normalizeCandle";

export interface TrendResult {
  trend: "Bullish" | "Bearish" | "Neutral";
  confidence: number;
  description: string;
}

/**
 * تعیین Trend بر اساس Market Structure و BOS/CHOCH
 */
export function detectTrend(
  candles: Candle[],
  marketStructure: "Bullish" | "Bearish" | "Range",
  BOS: string[],
  CHOCH: string[]
): TrendResult {
  let trend: "Bullish" | "Bearish" | "Neutral" = "Neutral";
  let confidence = 50;
  let description = "";

  // منطق ساده بر اساس ساختار بازار
  if (marketStructure === "Bullish") {
    trend = "Bullish";
    description = "Bullish structure confirmed by market data.";
    // افزایش confidence با توجه به تعداد BOS صعودی
    const bullishBOS = BOS.filter(b => b.toLowerCase().includes("bullish")).length;
    confidence = 50 + Math.min(bullishBOS * 5, 50);
  } else if (marketStructure === "Bearish") {
    trend = "Bearish";
    description = "Bearish structure confirmed by market data.";
    // افزایش confidence با توجه به تعداد BOS نزولی
    const bearishBOS = BOS.filter(b => b.toLowerCase().includes("bearish")).length;
    confidence = 50 + Math.min(bearishBOS * 5, 50);
  } else {
    trend = "Neutral";
    description = "Market is ranging or signals are conflicting.";
    confidence = 50;
  }

  // چک کردن تغییر CHOCH برای اصلاح confidence
  const chochCount = CHOCH.length;
  if (chochCount > 0) {
    confidence = Math.min(confidence + chochCount * 3, 100);
    description += ` ${chochCount} CHOCH detected.`;
  }

  return {
    trend,
    confidence,
    description,
  };
}