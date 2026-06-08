// lib/types/Candle.ts
export interface Candle {
  timestamp: number; // یا string اگر می‌خوای
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}