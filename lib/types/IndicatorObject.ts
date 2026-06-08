export interface IndicatorObject {
  ema20: number;
  ema50: number;
  ema200: number;
  rsi: { value: number; signal: "overbought" | "oversold" | "neutral" };
  macd: { macd: number; signal: number; histogram: number; trend: string };
  volume_analysis: { volume: number; volume_strength: "high" | "normal" | "weak" };
  atr: { value: number; volatility: "high" | "medium" | "low" };
  bollinger_bands: { upper: number; middle: number; lower: number; position: "upper" | "middle" | "lower" };
  stochastic: { k: number; d: number; signal: "overbought" | "oversold" | "neutral" };
}
