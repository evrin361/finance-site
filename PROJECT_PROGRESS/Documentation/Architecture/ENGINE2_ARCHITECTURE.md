# ENGINE2 ARCHITECTURE

## Purpose

Engine2 is responsible for confirming market direction using technical indicators and producing a confidence-weighted directional bias.

---

## Inputs

### Market Data

* Open
* High
* Low
* Close
* Volume

---

## Indicator Layer

### EMA Module

Produces:

* ema20
* ema50
* ema200
* emaTrend

Values:

* bullish
* bearish
* neutral

---

### RSI Module

Produces:

* rsi
* rsiSignal

Values:

* overbought
* oversold
* neutral

---

### MACD Module

Produces:

* macd
* signal
* histogram
* macdTrend

Values:

* bullish
* bearish
* neutral

---

### Volume Module

Produces:

* volume
* volumeStrength

Values:

* high
* medium
* low

---

### Bollinger Module

Produces:

* upper
* middle
* lower
* bollingerPosition

Values:

* upper
* middle
* lower

---

### Stochastic Module

Produces:

* stochasticK
* stochasticD
* stochasticSignal

Values:

* overbought
* oversold
* neutral

---

## Indicator Object

All indicator outputs are normalized into a single IndicatorObject.

Purpose:

Provide a unified interface for Engine2 processing.

---

## Engine2 Processing Flow

Market Data

↓

Indicator Calculation

↓

IndicatorObject

↓

Indicator Confirmation Engine

↓

Confidence Score

↓

Final Bias

---

## Output Contract

```ts
{
  confidenceScore: number;
  bullishSignals: number;
  bearishSignals: number;
  neutralSignals: number;
  finalBias:
    | "bullish"
    | "bearish"
    | "neutral";
  summary: string;
}
```

## Bias Decision Logic

* Bullish signals > Bearish signals → Bullish
* Bearish signals > Bullish signals → Bearish
* Equal signals → Neutral

---

## Current Status

Status: Production Ready

Data Source: Binance

Validation: Completed

Last Updated: 2026-06-08
