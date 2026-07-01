# Shop Master and Funnel Spec

## 1) Goal
- Link candidate list and visit logs into one trackable funnel.
- Ensure every visit can be traced to a stable `shop_id`.

## 2) Canonical Files
- Shop master: `docs/Sales/active/05_shop_master.csv`
- Candidate source: `docs/Sales/data/HK_Sales_Playbook_香港銷售名單(按優先級).csv`
- Visit log: `docs/Sales/data/HK_Birdnest_Store_Visit_Log.xlsx` (`Visit_Data` sheet)
- Column rules: `docs/Sales/active/04_store_visit_log_rules.md`

## 3) Key Linking Rule
- Join key priority:
  1. `shop_id` (if present)
  2. exact `shop_name` text match from master
- Operational requirement:
  - In `Visit_Data` column `店名`, always use the canonical name from `05_shop_master.csv`.
  - Do not invent short aliases in log rows.

## 4) Recommended Workbook Upgrade (non-breaking)
- Keep existing 13 columns unchanged.
- Append optional columns after current schema:
  - `shop_id`
  - `funnel_stage`
  - `next_followup_date`
  - `owner`

## 5) Funnel Stage Definition
- `S0_LISTED`: shop is in master list but no outbound contact yet
- `S1_CONTACTED`: first outreach sent (WhatsApp/phone)
- `S2_QUOTED`: quote range received
- `S3_VISITED`: physical or deep follow-up done
- `S4_TEST`: sample / first-lot test in progress
- `S5_NEGOTIATING`: terms being negotiated
- `S6_WON`: first paid deal completed
- `S7_REPEAT`: repeat purchase observed
- `SX_DROPPED`: no-fit / paused target

## 6) Stage Transition Rules
- `S0 -> S1`: outbound message logged
- `S1 -> S2`: concrete price feedback logged
- `S2 -> S3`: visit completed and summary recorded
- `S3 -> S4`: sample or first-lot action confirmed
- `S4 -> S5`: both sides discuss terms/conditions
- `S5 -> S6`: first payment confirmed
- `S6 -> S7`: at least one repeat paid order
- any stage -> `SX_DROPPED`: quality mismatch, pricing dead-end, or unacceptable settlement risk

## 7) Weekly KPI Cut
- `contact_rate = S1+ / S0_total`
- `quote_rate = S2+ / S1+`
- `visit_rate = S3+ / S2+`
- `test_rate = S4+ / S3+`
- `win_rate = S6+ / S5+`
- `repeat_rate = S7 / S6`

## 8) Practical Update Procedure
1. Update visit rows in workbook daily.
2. Weekly, map each row to `shop_id` using master names.
3. Update each shop's latest `funnel_stage`.
4. Publish a one-page weekly funnel summary (counts + blockers).

## 9) Data Hygiene
- One visit event per row; do not overwrite history rows.
- Keep `結款帳期 (天)` numeric (`0` for COD).
- Ensure `Next Action` includes action + date.
- For merged/same-group shops, keep separate `shop_id` unless commercial terms are truly unified.
