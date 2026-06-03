export interface Candle {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export function normalizeCandle(raw: any[]): Candle {
  return {
    timestamp: Number(raw[0]),
    open: Number(raw[1]),
    high: Number(raw[2]),
    low: Number(raw[3]),
    close: Number(raw[4]),
    volume: Number(raw[5]),
  };
}

export function normalizeCandles(rawCandles: any[]): Candle[] {
  return rawCandles.map(normalizeCandle);
}