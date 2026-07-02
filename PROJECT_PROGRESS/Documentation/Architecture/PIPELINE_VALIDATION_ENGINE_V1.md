# PIPELINE VALIDATION ENGINE V1

**Status:** FROZEN ✅

---

# Purpose

Pipeline Validation Engine is responsible for validating every analysis request before it reaches any analysis engine.

Its responsibility is to guarantee that all downstream engines receive valid, consistent and reliable market data.

No analysis engine should perform these validations again.

---

# Validation Flow

Analysis Request

↓

Market Validation

↓

Timeframe Validation

↓

Symbol Validation

↓

Empty Data Validation

↓

Array Length Validation

↓

Minimum Candle Count Validation

↓

OHLC Integrity Validation

↓

Engine1

↓

Engine2

---

# Validation Rules

## 1. Market Validation

The requested market must be one of the officially supported SmartTahlil markets.

If not:

Analysis is rejected.

---

## 2. Timeframe Validation

The requested timeframe must be supported by the current SmartTahlil architecture.

Current Version:

Only the official analysis timeframe is supported.

Future versions may support Multi-Timeframe Analysis.

---

## 3. Symbol Validation

The trading symbol:

* must not be empty
* must not contain only whitespace

Provider-specific symbol validation belongs to the Market Data layer and is not part of Pipeline Validation.

---

## 4. Empty Candle Validation

The following arrays must not be empty:

* Open
* High
* Low
* Close
* Volume

---

## 5. Candle Length Validation

All candle arrays must contain exactly the same number of elements.

Example:

Open = 500

High = 500

Low = 500

Close = 500

Volume = 500

Any mismatch immediately stops the analysis.

---

## 6. Minimum Candle Requirement

SmartTahlil V1 requires at least **500 candles**.

Reason:

The platform focuses on high-confidence medium and long-term analysis.

This requirement guarantees enough historical context for:

* Market Structure
* Liquidity
* Order Blocks
* Fair Value Gaps
* EMA calculations
* ATR calculations
* RSI
* MACD
* Stochastic
* Confidence Engine

If fewer than 500 candles are provided, the analysis is rejected.

---

## 7. OHLC Integrity Validation

Every candle must satisfy the following rules:

High ≥ Open

High ≥ Close

Low ≤ Open

Low ≤ Close

High ≥ Low

If any candle violates these rules, the market data is considered invalid and analysis is rejected immediately.

---

# Architectural Responsibility

Pipeline Validation validates:

* Request integrity
* Data integrity
* Structural integrity

Pipeline Validation does **NOT** perform:

* Technical analysis
* Indicator calculation
* Smart Money analysis
* Confidence scoring
* Trade planning

Those responsibilities belong to their dedicated engines.

---

# Design Principles

Pipeline Validation follows these principles:

* Fail Fast
* Single Responsibility
* Engine Independence
* Provider Independence
* Deterministic Validation

---

# Architecture Position

Customer Request

↓

Normalizer

↓

Pipeline Validation Engine

↓

Engine1 (SMC)

↓

Engine2 (Indicators)

↓

Merge Engine

↓

Master Analysis Object

---

# Version

Pipeline Validation Engine V1

Status:

Production Ready ✅

Frozen

Last Updated:

2026-07-02
