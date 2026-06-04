import { runSMCEngine } from "@/lib/engines/engine1";
import { Candle } from "@/lib/normalizer/normalizeCandle";

export function testEngine1(candles: Candle[]) {
  const result = runSMCEngine("BTCUSDT", candles);

  console.log("ENGINE 1 RESULT:");
  console.log(result);

  return result;
}
