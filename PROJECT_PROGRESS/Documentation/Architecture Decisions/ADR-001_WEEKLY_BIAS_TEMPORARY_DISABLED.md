# ADR-001

## Title

Weekly Bias Temporarily Disabled Until SMCAnalysisObject V2

---

## Status

Accepted

---

## Context

Engine1 Output Contract defines Weekly Bias as an independent analytical horizon.

The current SMCAnalysisObject interface does not yet contain Weekly Bias fields.

This creates a temporary mismatch between the Engine Output Contract and the implementation.

---

## Decision

Weekly Bias must NOT be merged into MidTerm View.

Weekly Bias remains an independent architectural concept.

The Weekly Bias Mapper shall remain disabled until SMCAnalysisObject V2 introduces the required fields.

---

## Consequences

* No refactoring is required later.
* MidTerm remains independent.
* Weekly Bias can be added without breaking the Finding Layer.
* A TODO marker shall remain inside the mapper directory until V2 is implemented.

---

## References

* ENGINE_1_OUTPUT_CONTRACT_V1
* SMCAnalysisObject V2 (Planned)

---

Author

SMARTTAHLIL Architecture
