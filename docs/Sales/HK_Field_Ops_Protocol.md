# HK Field Ops Protocol

## 1) Objective
- Standardize HK store outreach, intelligence capture, and follow-up so results are auditable and repeatable.

## 2) Team Model
- Treat front-line runner as partner, not subordinate.
- Allow voice-first reporting, but enforce text summary record after each contact.
- Rule: no final commercial terms remain verbal-only.

## 3) Communication Protocol
1. One store, one thread.
2. One visit, one summary block.
3. Summary must include:
   - store identity
   - offer/response
   - settlement condition
   - next action + date

## 4) Tiered Sales Priority
1. Tier 1: recovery buyers (cash-fast)
2. Tier 2: flexible online/small buyers (test-lot)
3. Tier 3: traditional wholesale (relationship-heavy)
4. Tier 4: major brands (long-cycle, low short-term hit rate)

## 5) Field Data Standard
- Canonical log workbook: `docs/Sales/data/HK_Birdnest_Store_Visit_Log.xlsx`
- Detailed column and validation rules: `docs/Sales/active/04_store_visit_log_rules.md`
- Shop master and funnel spec: `docs/Sales/active/05_shop_master.csv`, `docs/Sales/active/06_shop_master_funnel_spec.md`
- Required dimensions:
  - shop/profile
  - sourcing model
  - purchase mode
  - settlement term
  - price reaction
  - follow-up action

## 6) Store Visit Workflow
1. Pre-contact with photo + weight context
2. Filter by quote realism before physical visit
3. Visit only qualified targets
4. Same-day update to log and next-action queue

## 7) Decision Tag Framework
- `A_CASH_FAST`: short settlement + positive quote signal
- `B_TEST`: sample/second-contact needed
- `C_RISK`: long settlement, weak trust, or poor price fit

## 8) Review Cadence
- Daily: append all visits
- Weekly: quality gate + prioritize revisit list
- Monthly: freeze snapshot to archive for traceability

## 9) Source Lineage
- `archive/phase_strategy_ops_merge_20260309/HK_Sales_Playbook.md`
- `archive/phase_strategy_ops_merge_20260309/Management_Protocol_HK.md`
- `docs/Sales/active/02_hk_field_execution_pack.md`
