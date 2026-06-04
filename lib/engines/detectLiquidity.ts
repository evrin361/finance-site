import { Candle } from "@/lib/normalizer/normalizeCandle";

export function detectLiquidity(candles: Candle[]) {
  // فعلاً Skeleton ساده
  // بعداً الگوریتم دقیق اضافه می‌شود
  const buySideLiquidity: string[] = [];
  const sellSideLiquidity: string[] = [];

  // مثال اولیه: فرض کنیم آخرین 5 کندل بالاترین و پایین‌ترین قیمت‌ها را بررسی می‌کنیم
  const last5 = candles.slice(-5);
  for (let i = 0; i < last5.length; i++) {
    const c = last5[i];
    if (c.close > c.open) {
      buySideLiquidity.push(`Buy Side Liquidity near candle ${candles.length - 5 + i}`);
    } else if (c.close < c.open) {
      sellSideLiquidity.push(`Sell Side Liquidity near candle ${candles.length - 5 + i}`);
    }
  }

  return { buySideLiquidity, sellSideLiquidity };
}