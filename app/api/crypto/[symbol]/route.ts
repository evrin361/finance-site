import { NextResponse } from "next/server";
import {
  normalizeCandles,
} from "@/lib/normalizer/normalizeCandle";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ symbol: string }> }
) {
  const { symbol } = await params;

  const upperSymbol = symbol.toUpperCase();

  const url =
    `https://api.binance.com/api/v3/klines?symbol=${upperSymbol}&interval=1d&limit=500`;

  const response = await fetch(url);

  if (!response.ok) {
    return NextResponse.json(
      {
        success: false,
        error: "Binance API Error",
      },
      { status: 500 }
    );
  }

  const data = await response.json();
  const normalized = normalizeCandles(data);

  return NextResponse.json({
  success: true,
  symbol: upperSymbol,
  candles: normalized.length,
  data: normalized,
});
}