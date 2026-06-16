import { buildIndicatorObject }
from "../indicators/buildIndicatorObject";

async function run() {

  const res = await fetch(
    "http://localhost:3000/api/crypto/btcusdt"
  );

  const json = await res.json();

  console.log(json);
  console.log(Object.keys(json));

  if (!json.success) {
    console.error(json.error);
    return;
  }

  const candles = json.data;

  const closes = candles.map(
    (c: any) => c.close
  );

  const highs = candles.map(
    (c: any) => c.high
  );

  const lows = candles.map(
    (c: any) => c.low
  );

  const volumes = candles.map(
    (c: any) => c.volume
  );

  const indicators =
    buildIndicatorObject({
      closes,
      highs,
      lows,
      volumes,
    });

  console.log(indicators);

}

run();