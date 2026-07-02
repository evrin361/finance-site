export interface IndicatorObject {
  ema20: number | null;
  ema50: number | null;
  ema200: number | null;

  rsi: {
    value: number | null;
    signal: "overbought" | "oversold" | "neutral";
  };

  macd: {
    macd: number | null;
    signal: number | null;
    histogram: number | null;
    trend: string;
  };

  volume_analysis: {
    volume: number | null;
    volume_strength: "high" | "medium" | "low";
  };

  atr: {
    value: number | null;
    volatility: "high" | "medium" | "low";
  };

  bollinger_bands: {
    upper: number | null;
    middle: number | null;
    lower: number | null;
    position: "upper" | "middle" | "lower";
  };

  stochastic: {
    k: number | null;
    d: number | null;
    signal: "overbought" | "oversold" | "neutral";
  };
}