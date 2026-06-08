# SMARTTAHLIL INDICATOR PROVIDER STANDARD V1

Status:
FROZEN

---

## Purpose

This document defines the official indicator calculation provider used by SMARTTAHLIL.

The goal is to ensure consistent, reliable, and maintainable indicator calculations across all analysis engines.

---

## Official Indicator Provider

technicalindicators

---

## Supported Indicators

- EMA20
- EMA50
- EMA200
- RSI
- MACD
- Volume Analysis
- ATR
- Bollinger Bands
- Custom Stochastic

---

## Selection Reasons

technicalindicators was selected because:

- Mature and widely used
- Well tested
- Lightweight
- TypeScript compatible
- Easy integration with Next.js
- Supports current SMARTTAHLIL indicators
- Reduces implementation complexity
- Improves reliability of calculations

---

## Design Principle

Indicator Calculation Service must not directly depend on Engine2.

Indicator calculations must remain independent and reusable.

---

## Provider Abstraction Rule

Future versions may replace technicalindicators with another provider.

Engine2 must not require modifications when provider implementation changes.

Only Indicator Calculation Service should interact with the provider.

---

## Architecture

Market Data
↓
Normalizer
↓
Indicator Calculation Service
↓
technicalindicators
↓
Indicator Object
↓
Engine2

---

## Current Status

Provider Selected:
technicalindicators

Status:
Approved

Version:
V1

---

END OF DOCUMENT