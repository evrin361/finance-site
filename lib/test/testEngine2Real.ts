import { buildIndicatorObject }
from "../indicators/buildIndicatorObject";

import {
  runIndicatorConfirmationEngine,
}
from "../engines/indicatorConfirmationEngine";

async function run() {

  const res = await fetch(
    "http://localhost:3000/api/crypto/btcusdt"
  );

const text = await res.text();

console.log(text);

return;


  const json = await res.json();

  if (!json.success) {
    console.error(json.error);
    return;
  }

  const candles = json.data;

  const closes =
    candles.map((c: any) => c.close);

  const highs =
    candles.map((c: any) => c.high);

  const lows =
    candles.map((c: any) => c.low);

  const volumes =
    candles.map((c: any) => c.volume);

  const indicators =
    buildIndicatorObject({
      closes,
      highs,
      lows,
      volumes,
    });

  console.log("🔥 INDICATORS");
  console.log(indicators);

  const result =
    runIndicatorConfirmationEngine({
      emaTrend:
        indicators.emaTrend,

      rsiSignal:
        indicators.rsiSignal,

      macdTrend:
        indicators.macdTrend,

      volumeStrength:
        indicators.volumeStrength,

      stochasticSignal:
        indicators.stochasticSignal,

      bollingerPosition:
        indicators.bollingerPosition,


atrVolatility:
  indicators.atrVolatility,

    });

  console.log("");
  console.log("🔥 ENGINE2 RESULT");
  console.log(result);
}

run();