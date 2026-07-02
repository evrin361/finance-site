export interface PipelineValidationInput {
  market: string;

  symbol: string;

  timeframe: string;

  candles: {
    open: number[];
    high: number[];
    low: number[];
    close: number[];
    volume: number[];
  };
}

const MIN_ANALYSIS_CANDLES = 500;
const SUPPORTED_MARKETS = [
  "crypto",
  "forex",
  "iran_stock",
] as const;

const SUPPORTED_TIMEFRAMES = [
  "15m",
  "1h",
  "4h",
  "1d",
  "1w",
] as const;

export function validatePipelineInput(
  input: PipelineValidationInput
): void {


if (
  !SUPPORTED_MARKETS.includes(
    input.market as (typeof SUPPORTED_MARKETS)[number]
  )
) {
  throw new Error(
    `Unsupported market: ${input.market}`
  );
}

if (
  !SUPPORTED_TIMEFRAMES.includes(
    input.timeframe as (typeof SUPPORTED_TIMEFRAMES)[number]
  )
) {
  throw new Error(
    `Unsupported timeframe: ${input.timeframe}`
  );
}

if (input.symbol.trim().length === 0) {
  throw new Error(
    "Symbol cannot be empty."
  );
}

  if (input.candles.open.length === 0)
    throw new Error("Open candles are empty.");

  if (input.candles.high.length === 0)
    throw new Error("High candles are empty.");

  if (input.candles.low.length === 0)
    throw new Error("Low candles are empty.");

  if (input.candles.close.length === 0)
    throw new Error("Close candles are empty.");

  if (input.candles.volume.length === 0)
    throw new Error("Volume candles are empty.");

  const length = input.candles.open.length;

  if (input.candles.high.length !== length)
    throw new Error("High candle count mismatch.");

  if (input.candles.low.length !== length)
    throw new Error("Low candle count mismatch.");

  if (input.candles.close.length !== length)
    throw new Error("Close candle count mismatch.");

  if (input.candles.volume.length !== length)
    throw new Error("Volume candle count mismatch.");

  if (length < MIN_ANALYSIS_CANDLES) {
    throw new Error(
      `SmartTahlil requires at least ${MIN_ANALYSIS_CANDLES} candles. Received ${length}.`
    );
  }


for (let i = 0; i < length; i++) {
  const open = input.candles.open[i];
  const high = input.candles.high[i];
  const low = input.candles.low[i];
  const close = input.candles.close[i];

  if (high < open) {
    throw new Error(
      `Invalid candle at index ${i}: High < Open`
    );
  }

  if (high < close) {
    throw new Error(
      `Invalid candle at index ${i}: High < Close`
    );
  }

  if (low > open) {
    throw new Error(
      `Invalid candle at index ${i}: Low > Open`
    );
  }

  if (low > close) {
    throw new Error(
      `Invalid candle at index ${i}: Low > Close`
    );
  }

  if (high < low) {
    throw new Error(
      `Invalid candle at index ${i}: High < Low`
    );
  }

}
  
}