# ADR-003

## Title

Insight Layer Owns Global Evaluation

---

## Status

Accepted

---

## Context

Some fields require knowledge produced after multiple reasoning stages.

These fields cannot be generated directly from Findings.

---

## Decision

The following fields belong to the Insight Layer:

* market_status
* analysis_confidence
* trade_risk

Engine1 may provide evidence, but it shall never calculate these final values.

---

## Reason

These values require reasoning over:

* SMC Findings
* Indicator Findings
* MidTerm Claims
* LongTerm Claims
* Cross-engine validation

Only the Insight Layer has access to all required information.

---

## Consequences

Engine1 remains responsible only for Findings.

Insight Layer performs global evaluation.

Narrative Layer communicates the final knowledge.

---

## References

* MIDTERM_REASONING_ENGINE_V1
* ENGINE_1_OUTPUT_CONTRACT_V1
* ENGINE_2_OUTPUT_CONTRACT_V1

---

Author

SMARTTAHLIL Architecture
