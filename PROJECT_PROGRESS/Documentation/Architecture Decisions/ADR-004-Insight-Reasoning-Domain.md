# ADR-004

# SMARTTAHLIL Architecture Decision Record

## Subject

Insight Layer Decision Logic

**Status:** Accepted

# SMARTTAHLIL Architecture Decision Record (ADR)

## Subject

Insight Layer Decision Logic

**Status:** Accepted

---

# Background

SMARTTAHLIL Intelligence Pipeline is defined as:

Observation

↓

Finding

↓

Claim

↓

Insight

↓

Narrative

Current Claim structure:

```ts
{
    id,
    type,
    result,
    confidence,
    supportingFindings
}
```

The architectural question is whether an Insight Generator should evaluate:

* every available Claim in the system,

or

* only the Claims relevant to its own responsibility.

---

# Decision

Insight Generators are **domain-specialized reasoning components**.

Each Insight Generator is responsible for producing one specific Insight.

To achieve this, it must evaluate **all Claims that are architecturally relevant to that Insight**, but it must ignore unrelated Claims.

Therefore, Insight Generators do **not** perform unrestricted global reasoning.

They perform **bounded reasoning** over a well-defined subset of Claims.

---

# Examples

## MarketStatusInsightGenerator

Purpose:

Determine the overall market condition.

Relevant Claims may include:

* Trend
* BOS / CHOCH Interpretation
* Liquidity Direction
* Smart Money Behavior
* Order Block Context
* FVG Context

Not Relevant:

* Entries
* Targets
* Position Size
* Risk Reward

These Claims must not influence Market Status.

---

## AnalysisConfidenceInsightGenerator

Purpose:

Estimate confidence in the complete analysis.

Relevant Claims include:

* Trend
* Liquidity
* Smart Money
* Order Blocks
* FVG
* Indicator Confirmation
* Internal Claim Confidence

This generator is expected to aggregate confidence from multiple domains.

---

## TradeRiskInsightGenerator

Purpose:

Estimate trading risk.

Relevant Claims include:

* Liquidity
* Volatility
* Smart Money
* Trend Stability
* Risk Reward
* Entry Quality
* Stop Loss Reliability

It does not need to inspect unrelated narrative information.

---

# Architecture Principle

Each Insight Generator owns a clearly defined reasoning domain.

It may inspect multiple Claim categories,

but only those that contribute to its architectural responsibility.

This approach provides:

* High Cohesion
* Low Coupling
* Predictable Reasoning
* Easy Future Extension

---

# Future Extensibility

When new Claim types are introduced,

only the affected Insight Generators need to update their dependency map.

No global reasoning engine requires modification.

---

# Official Architecture Rule

Insight Generators shall:

* remain specialized,
* evaluate all architecturally relevant Claims,
* ignore unrelated Claims,
* never perform unrestricted reasoning over every Claim in the system.

This architecture preserves modularity while allowing rich multi-factor reasoning.

**Chief Architect**

SMARTTAHLIL Architecture

---

## Implementation Impact

Affected Components:

- InsightEngine
- MarketStatusInsightGenerator
- AnalysisConfidenceInsightGenerator
- TradeRiskInsightGenerator

No changes required in:

- Finding Layer
- Claim Layer
- Narrative Layer