# PLAN LAYER ENGINE V1

## Status

FROZEN

---

# Mission

Convert a single MasterAnalysisObject into multiple presentation layers.

The Plan Layer never performs analysis.

The Plan Layer never changes analysis.

The Plan Layer only selects which fields should be visible for each subscription plan.

---

# Philosophy

One Analysis

↓

Multiple Views

The MasterAnalysisObject is the single source of truth.

Every customer receives the same analysis.

Only the visible information changes.

---

# Input

MasterAnalysisObject

---

# Output

{
    free,
    economic,
    premium
}

---

# FREE PLAN

Visible Sections

- Executive Summary
- Market Structure
- Scenarios
- Key Levels
- Market Status

Purpose

Provide enough information for visitors to understand market conditions.

---

# ECONOMIC PLAN

Includes everything from FREE

Plus

- Entries
- Targets
- Stop Loss
- Risk Reward
- Indicator Confirmation

Purpose

Provide actionable trading information.

---

# PREMIUM PLAN

Includes everything from ECONOMIC

Plus

- Capital Management
- Position Management
- Trade Plan
- Profit Taking Plan
- Stop Loss Management
- Mid-Term View
- Long-Term View
- Bullish / Bearish Cases
- Invalidations
- Special Notes

Purpose

Deliver the complete professional SmartTahlil analysis.

---

# Golden Rule

The analysis is never duplicated.

Only the presentation changes.

MasterAnalysisObject

↓

Plan Layer

↓

Free

Economic

Premium

---

# Future Extensions

Future versions may support:

- VIP Plans
- Institutional Plans
- API Output
- Mobile Optimized View
- AI Chat View

without modifying MasterAnalysisObject.

---

END OF DOCUMENT