# Store Visit Log Rules

Target workbook:
- `docs/Sales/data/HK_Birdnest_Store_Visit_Log.xlsx`

Linked shop master/funnel:
- `docs/Sales/active/05_shop_master.csv`
- `docs/Sales/active/06_shop_master_funnel_spec.md`

## 1) Sheet Roles
- `Visit_Data`: system-of-record (only this sheet is used for analysis).
- `Checklist_Printable`: printable helper page (not used as structured data source).

## 2) Visit_Data Column Spec (fixed)
| # | Column | Type | Required | Allowed / Rule |
|---|---|---|---|---|
| 1 | 拜訪日期 | date (`YYYY-MM-DD`) | Yes | One visit date per row |
| 2 | 店名 | text | Yes | Official or common shop name |
| 3 | 地區 | text | Yes | Example: 上環, 旺角, 沙田 |
| 4 | 店鋪類型 | enum | Yes | `海味店` / `藥房` / `精品店` / `網店` / `其他` |
| 5 | 拿貨來源 | text | Yes | Example: 大拆商, 印尼直供, 馬來直供 |
| 6 | 採購模式 (賣斷/寄賣) | enum | Yes | `賣斷` / `寄賣` / `混合` |
| 7 | 結款帳期 (天) | integer | Yes | `0` for COD, otherwise positive integer |
| 8 | 我方報價 | number | Yes | HKD/g numeric, example `7.6` |
| 9 | 市場反應 | enum | Yes | `偏貴` / `合理` / `有興趣` / `需再議` / `拒絕` |
| 10 | 產品偏好 (備註) | text | No | Size, color, dryness, grade hints |
| 11 | 老闆個性/風險評估 | text | No | Negotiation style + risk flag |
| 12 | 綜合評分 (1-5) | integer | Yes | Integer only, range `1..5` |
| 13 | Next Action | text | Yes | Clear next step with target date |

## 3) Row Rules
- One row = one store visit event (not one store master profile).
- Revisit same store on different days: create a new row.
- Same-day multiple meetings with same store: keep separate rows if terms changed.
- Recommended unique key for review: `拜訪日期 + 店名 + 地區`.
- `店名` should match canonical names in `05_shop_master.csv` for reliable join.

## 4) Entry Normalization
- Dates must be ISO format: `YYYY-MM-DD`.
- 帳期 normalization:
  - COD => `0`
  - 月結30 => `30`
  - 月結60 => `60`
- 我方報價 uses numeric only (no `$` sign in cell).
- 綜合評分 uses integer only (no stars in cell).

## 5) Quality Gate (before weekly review)
- No blank in required columns.
- `結款帳期 (天)` must be numeric and >= 0.
- `綜合評分 (1-5)` must be integer in range.
- `Next Action` must contain concrete action and follow-up timing.

## 6) Decision Tags (derived, not raw columns)
- `A_CASH_FAST`: 帳期 0-7 + 市場反應 positive + 評分 >= 4
- `B_TEST`: 帳期 <= 30 + 需樣品/再議
- `C_RISK`: 帳期 > 30 or strong price rejection or unstable trust signal

## 7) Maintenance Rhythm
- Daily: append visits on same day.
- Weekly: run quality gate and confirm follow-up list.
- Monthly: freeze a copy to `docs/Sales/archive/` for historical trace.
