# SMARTTAHLIL CONFIDENCE ENGINE V1

## Version

V1.0

## Engine

Engine1

## Status

Implemented in Engine1 v1.7

---

# Purpose

The Confidence Engine evaluates how reliable the Smart Money Concept (SMC) analysis is.

The objective is not to generate trade signals.

The objective is to measure confidence in the detected market structure.

---

# Confidence Score Range

0 → 100

Higher score means stronger confirmation from multiple SMC components.

---

# Confidence Calculation Rules

## Trend Confirmed

Condition:

* Bullish Trend
* Bearish Trend

Score:

+20

Reason:

Trend confirmed

---

## Market Structure Confirmed

Condition:

* Bullish Structure
* Bearish Structure

Score:

+20

Reason:

Market Structure confirmed

---

## BOS Detected

Condition:

At least one BOS exists

Score:

+15

Reason:

BOS detected

---

## CHOCH Detected

Condition:

At least one CHOCH exists

Score:

+15

Reason:

CHOCH detected

---

## Order Blocks Detected

Condition:

Bullish Order Block exists

OR

Bearish Order Block exists

Score:

+10

Reason:

Order Blocks detected

---

## Fair Value Gap Detected

Condition:

At least one FVG exists

Score:

+10

Reason:

FVG detected

---

## Liquidity Detected

Condition:

Buy Side Liquidity exists

OR

Sell Side Liquidity exists

Score:

+10

Reason:

Liquidity detected

---

# Maximum Confidence

100

---

# Output

```typescript
{
  analysisConfidence: number;
  confidenceReason: string;
}
```

---

# Risk Engine V1

## Purpose

Estimate trade risk level based on alignment between market structure and trade direction.

---

# Risk Output

```typescript
{
  riskScore: number;
  riskReason: string;
  marketStatus: string;
}
```

---

# Current Risk Logic

## Bullish Continuation

Condition:

Bullish Trend
+
Bullish Structure

Output:

Risk Score = 30

Risk Reason:

Low Risk: Market aligns with trade

Market Status:

Bullish Continuation

---

## Bearish Continuation

Condition:

Bearish Trend
+
Bearish Structure

Output:

Risk Score = 30

Risk Reason:

Low Risk: Market aligns with trade

Market Status:

Bearish Continuation

---

## Mixed Structure

Condition:

Trend and Structure disagree

Output:

Risk Score = 70

Risk Reason:

High Risk: Mixed signals detected

Market Status:

Neutral

---

# Market Status Values

Possible outputs:

* Bullish Continuation
* Bearish Continuation
* Neutral

---

# Future Improvements

Planned for future versions:

* Confidence weighting
* Multi-timeframe confidence
* Liquidity quality scoring
* Order Block strength scoring
* Dynamic risk scoring
* Engine2 indicator confirmation integration

---

END OF DOCUMENT
