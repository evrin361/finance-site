# Weekly Bias Architecture Decision

Status: ACCEPTED

Date: 2026-07-27

---

## Background

ENGINE_1_OUTPUT_CONTRACT_V1 contains Weekly Bias.

Current SMCAnalysisObject does not contain Weekly Bias fields.

---

## Decision

Weekly Bias is NOT removed.

Weekly Bias is NOT merged into MidTerm.

Weekly Bias will return in SMCAnalysisObject V2.

Until then:

- Weekly Bias Mapper remains disabled.
- Mapper file should stay in the project.
- File must contain TODO comment.
- No refactoring is allowed that redirects Weekly Bias into MidTerm.

---

## TODO

Enable Weekly Bias Mapper after SMCAnalysisObject V2 is released.

---

Approved By

Chief Architect