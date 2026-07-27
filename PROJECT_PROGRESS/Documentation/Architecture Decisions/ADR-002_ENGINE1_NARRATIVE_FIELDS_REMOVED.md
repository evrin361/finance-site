# ADR-002

## Title

Narrative Fields Removed From Engine1

---

## Status

Accepted

---

## Context

Engine1 is responsible for producing Findings only.

Narrative generation belongs to the Narrative Layer.

The following fields were previously considered part of Engine1:

* executive_summary

---

## Decision

Executive Summary shall NOT be generated inside Engine1.

Engine1 returns structured findings only.

Narrative Engine is responsible for generating all human-readable summaries.

---

## Consequences

Engine1 becomes a pure Intelligence Extraction Engine.

Narrative remains language-independent and can support multiple languages without changing analytical knowledge.

---

## References

* MIDTERM_REASONING_ENGINE_V1
* ENGINE_1_OUTPUT_CONTRACT_V1

---

Author

SMARTTAHLIL Architecture
