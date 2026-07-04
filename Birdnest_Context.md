# Birdnest Project Context Master (Code + Strategy)

> **Global execution board**: `00_Today.md`

## Progress Log
- [x] [Phase 1] 索取報價並釐清大宗價格邏輯。
- [x] [2026-03-04] 樣品帶到台灣，完成初步視覺/觸感檢驗。
- [x] [Website] 品牌站已部署: `https://birdnest-eta.vercel.app/`。
- [x] [HK Execution] 樣品已寄香港，進行化驗與跑街詢價。
- [x] [2026-03-07] Partner 新報價 (Number 1/2/3) 已完成正常性分析。
- [x] [2026-03-09] 文件治理重整：README 與 docs 索引合併入本 Context；舊 phase changelog 移至 `docs/changelog/`。
- [x] [2026-03-09] 銷售文件去重：重複 `hk_sales_playbook.md` 與重複 `HK_Sales_Playbook.xlsx` 已移至 `archive/phase_doc_consolidation_20260309/`。
- [x] [2026-03-09] `marketing/` 已併入 `docs/Sales/`，統一為 `docs/Sales/active|archive|data|tools|media`。
- [x] [2026-03-09] 新增並維持 `docs/Sales/active/04_store_visit_log_rules.md`，固定 `docs/Sales/data/HK_Birdnest_Store_Visit_Log.xlsx` 欄位規格與質量閘門。
- [x] [2026-03-09] 完成主策略與 HK Field Ops 合併：`docs/strategy_master.md`、`docs/Sales/HK_Field_Ops_Protocol.md`；舊 `README.md`、`Management_Protocol_HK.md`、`docs/1_*`、`docs/2_*`、`docs/Sales/HK_Sales_Playbook.md` 已封存。
- [x] [2026-03-09] 網站程式已集中至 `website/`（`src/`, `public/`, `package*.json`, `next.config.mjs` 移入）。
- [x] [2026-03-09] 完成 `shop_id + funnel` 規格：新增 `docs/Sales/active/05_shop_master.csv` 與 `docs/Sales/active/06_shop_master_funnel_spec.md`。
- [x] [2026-03-09] 網站相關路徑再收斂：`plan/` -> `website/plan/`、`str/` -> `website/legacy_tools/str/`、舊靜態站 `result/` -> `archive/phase_website_legacy_20260309/result_static_site/`。
- [x] [2026-03-09] `visu_assets/raw_media` 歸類為資料資產並移至 `data/raw_media_source/raw_media/`。
- [x] [2026-03-31] 香港實體貨已到達；到貨照片存於 `data/到香港的貨(碎) 1.jpeg`、`data/到香港的貨(碎) 2.jpeg`、`data/到香港的貨(碎) 3.jpeg`，其中第 3 張顯示碎裂情況，暫未能判定屬包裝問題還是運輸損傷。
- [x] [2026-03-31] 現場流程延誤已確認：到貨後約一星期未處理，主因為本地協力節點未即時接手送驗；同時暴露出「未預先向 lab 查清流程 -> 到貨後未即送驗」的方法問題。
- [x] [2026-03-31] 戰略定調更新：香港協力人可保留作低期待、低時效之外圍執行點，但不再視為核心 partner 或主動型 operator；Birdnest 仍維持 `Conditional Freeze`。
- [x] **[2026-04-17] (業務進度更新)**:
    - **分工與角色**：確立三人核心執行組 —— **男仔朋友** (員工性質，有車可代支油錢、化驗費 ~1000)；**倉佬** (負責 Online/Facebook 渠道)；**打雜** (負責關係網絡推廣)。
    - **市場行情**：上環海味店目前回收價低迷，屬於「黑市價錢」。大 lot (大批貨) 批發受「南北行商會」定價機制限制，利潤空間受壓。
    - **物流調整**：因先前運輸公司品質不佳造成樣本破碎，下週改採 **「空姐帶貨」** 模式（約 10 片/10 盒）直送香港。
    - **戰略修正 (現貨模式)**：規畫與供應商（太子女）協商「先卸貨」模式，爭取 1kg 以上貨源預先在港存放，確保留存現貨（現貨為王），避免客戶詢問時因物流延遲導致流失。
    - **化驗進度**：Lab 開戶延遲約 5 天，現已推進到送驗/等報告階段。
- [x] [2026-04-20 週] **空姐帶貨進度跟進**：已確認樣本抵港。後續交收定於 5 月 3 日 (週日) 12:00 台北圓山站與 Johnny 當面進行 (保留於 ZeRo 家的實體樣本)。
- [x] [Taiwan SEO] **[閣置]** 需評估以「漢泉」路線建立可被 Baidu 收錄之頁面。目前因缺乏大陸身分證 (ID) 無法完成網站備案與百度帳號開設，暫停推進。
- [x] [2026-06-18] **台灣前輩燕窩轉錄已消化**：`tmp/docs/johnny_birdnest_raw_transcription.md` 的 durable value 已寫入本 Context；raw transcript 保留作來源。
- [x] [2026-07-04] **Website UI Revamp v3 (Antigravity)**: 
  * **燕子動畫**：將原本的靜態圖移動改為 **CSS Sprite Sheet 動畫**。使用 3 幀高解析度燕子姿態（翅膀上/中/下），以 ImageMagick 去白底並融合成 6 幀 Sprite Sheet (`swallow_sprite.png`)。以 CSS `steps(6)` 實作 8fps 的真實拍翼循環，並配合 Framer Motion 實現左下至右上角飛入並降落的軌跡。
  * **燕巢視覺**：拋棄原本的 SVG 碗狀線條，改用 **真實燕巢微距照片** (`nest_real.png`)。經過 50% 圓形裁切，並加上金色光暈效果（box-shadow glow），使視覺更為高貴真實。
  * **程式碼與資產管理**：調整 `.gitignore` 排除規則以追蹤新加入的 WebP 與 PNG 資產，並全部 Push 至 GitHub main 分支完成 Vercel 部署。


---

## 0) Project Card (Rev.H)
- Project: Birdnest (VN/HK/TW)
- Tier: Tier 2 (Conditional Freeze)
- Status: Conditional Freeze
- Owner: ZeRo
- Last Sync: 2026-04-17 Rev.J
- Primary Goal (30/90): 保留變現能力但避免資金空轉。
- One-line Constraint: 未達 `>=300g` 可成交承諾量前，不啟動 Lab。

## 1) Executive Snapshot
- Done: 網站上線、樣品抵港、報價正常性分析、HK 跑街資產就緒、香港到貨影像已存證。
- In Progress: 承諾量收集、HK 詢價、到貨碎裂原因初步辨識、香港 lab 流程可行性釐清。
- Blocked: 未達 `>=300g` 承諾量，Lab 不啟動；香港端目前只有單一低配協力點，且不具備主動型流程管理能力。
- Decision Needed: 是否僅把現有樣本視為流程測試用途；以及未來是否在具備預算/第二執行點前繼續推進香港端。

## 2) Folder Map
| Area | Folder | Key Files | Purpose |
|---|---|---|---|
| Context | root | `Birdnest_Context.md` | 單一決策真相與交接入口 |
| Strategy | `docs/` | `strategy_master.md` | 市場與現金流主策略 |
| Research | `docs/deep_thinking/` | `YYYYMMDD_topic.md` | 網站版 deep thinking 提煉稿 |
| Sales | `docs/Sales/` | `docs/Sales/HK_Field_Ops_Protocol.md`, `docs/Sales/active/02_hk_field_execution_pack.md` | 跑街執行與聯絡資產 |
| Funnel | `docs/Sales/active/` | `05_shop_master.csv`, `06_shop_master_funnel_spec.md` | 候選名單與拜訪漏斗追蹤 |
| Changelog | `docs/changelog/` | `2026-02-25_phase_4_2b_final_changelog.md` | 重要改版紀錄 |
| Archive | `archive/` | `phase_doc_consolidation_20260309/` | 重複或淘汰版本封存 |
| Archive | `archive/` | `phase_strategy_ops_merge_20260309/` | 合併前主策略與管理協議封存 |
| Archive | `archive/` | `phase_website_legacy_20260309/result_static_site/` | 舊靜態站封存 |
| Sales Archive | `docs/Sales/archive/` | `phase_marketing_consolidation_20260309/` | 一次性研究與舊稿封存 |
| Web | `website/` | `website/src/app/page.js`, `website/src/app/globals.css`, `website/plan/birdsnest_master_plan.md`, `website/legacy_tools/str/` | 品牌展示網站與網站歷史工具 |
| Local AI Skills | `.opencode/skills/`, `.agent/skills/` | `ui-ux-pro-max/SKILL.md` | Birdnest website UI/UX design reference for OpenCode and Antigravity-style workflows |
| Evidence | `data/` | 樣品/證書/素材, `data/raw_media_source/raw_media/` | 銷售信任素材 |
| Temp | `tmp/` | 轉錄/外部研究草稿 | 待提煉暫存 |

## 3) Module Index
| Module | Input | Output | Entry | Status |
|---|---|---|---|---|
| `M1_Quote_Normality` | Partner quote tiers | 正常性分析與利潤帶 | Manual analysis | Active |
| `M2_HK_Field_Playbook` | 樣品 + 名單 | 跑街詢價紀錄 | `docs/Sales/HK_Field_Ops_Protocol.md` | Active |
| `M3_Lab_Gate` | 承諾量 + 預算 | 啟動/延後 Lab 判定 | Gate-based decision | Pending |
| `M4_Web_Presence` | 品牌內容與素材 | 前台網站 | `npm --prefix website run dev` / `npm --prefix website run build` | Maintenance |

## 4) Decision Gates
| Gate | Pass Criteria | Fail Action | Owner |
|---|---|---|---|
| `G1_Commitment` | 可成交承諾量 `>=300g` | 維持 Freeze、只做詢價與預售 | ZeRo |
| `G2_Lab_Start` | `G1` 通過且預算可承受 | 延後 Lab | ZeRo |
| `G3_Cash_Proof` | 有首筆可驗證成交/收款 | 降級為低配維運 | ZeRo |

## 5) Execution Queue
- Now: 每週 <= 30 分鐘維護名單、報價、承諾量追蹤。
- Next: 只在達標後執行 Lab + 對外銷售話術升級。
- Later: Baidu SEO 與跨地區擴張（待現金流驗證）。

## 6) Handover
- Current Breakpoint: 承諾量未達 `>=300g`，且香港節點已驗證為「可幫忙但不可依賴為核心 operator」。
- First Action Next Session: 先以最低阻力方式確認 lab 流程、費用、所需文件、工作日，以及碎樣是否可驗；同步更新 HK 詢價紀錄。
- Do Not Do: 未達閘門直接送 Lab 或擴大投入；不得再以口頭默契假設香港協力人會自動補足前置流程。

---

## 7) README 合併區（Quickstart）

### Project Overview
- Type: 高端品牌展示與商務引流網站 (Next.js 15)。
- Core UX: "Liquid Glass" 視覺語言。
- i18n: TC / SC / EN / VN。

### Tech Stack
- Framework: Next.js (App Router)
- Styling: Tailwind CSS + CSS
- Motion: Framer Motion

### Developer Commands
- Install: `npm --prefix website install`
- Dev: `npm --prefix website run dev`
- Build: `npm --prefix website run build`
- Lint: `npm --prefix website run lint`

### Booking Strategy (Current)
- Booking flow 暫為前端互動版（成功動畫）。
- API 整合 (email/webhook) 暫停，待最終渠道決策。

---

## 8) Docs 索引（取代 docs/00_docs_context.md）

### Read Order
1. `Birdnest_Context.md`（本檔）
2. `docs/strategy_master.md`
3. `docs/Sales/HK_Field_Ops_Protocol.md`
4. `docs/Sales/active/00_active_context.md`
5. `docs/Sales/active/01_market_strategy_merged.md`
6. `docs/Sales/active/02_hk_field_execution_pack.md`
7. `docs/Sales/active/03_supplier_and_sales_playbook.md`
8. `docs/Sales/active/04_store_visit_log_rules.md`
9. `docs/Sales/active/06_shop_master_funnel_spec.md`
10. `docs/changelog/2026-02-25_phase_4_2b_final_changelog.md`
11. `website/plan/birdsnest_master_plan.md`

### Governance Rules
- 單一真相: 決策/狀態只在本檔更新。
- docs: 放主策略與可重用方法。
- deep thinking: 放 `docs/deep_thinking/`，命名 `YYYYMMDD_topic.md`，只保留可回看的提煉版。
- docs/Sales: `active/` 放現行可執行稿，`archive/` 放一次性研究與舊稿，`data/` 放名單與log。
- tmp: 放未提煉內容，不作決策依據。
- changelog: 只保留關鍵里程碑，避免 root 堆積 `Phase_*` 檔。
- archive: 重複檔或已淘汰版本移入 `archive/`，不直接刪除。
- AI/UI work: `ui-ux-pro-max` skills are available under both `.opencode/skills/` and `.agent/skills/` for website UI/UX work. When using free/untrusted models, use only public/redacted website information; do not expose supplier names, private pricing, contacts, lab status, sales logs, raw transcripts, or private strategy notes.

### Sales Doc Policy
- 主版: `docs/Sales/HK_Field_Ops_Protocol.md`
- 現場執行包: `docs/Sales/active/02_hk_field_execution_pack.md`
- 供應商與銷售打法: `docs/Sales/active/03_supplier_and_sales_playbook.md`
- 跑街記錄欄位規格: `docs/Sales/active/04_store_visit_log_rules.md`
- Shop Master: `docs/Sales/active/05_shop_master.csv`
- Funnel 規格: `docs/Sales/active/06_shop_master_funnel_spec.md`
- 重複稿: 已封存至 `archive/phase_doc_consolidation_20260309/`

---

## 9) Path Registry
- Context 主入口: `Birdnest_Context.md`
- Strategy: `docs/strategy_master.md`
- Deep Thinking: `docs/deep_thinking/`
- Sales 主手冊: `docs/Sales/HK_Field_Ops_Protocol.md`
- Sales Active: `docs/Sales/active/`
- Sales Data: `docs/Sales/data/`
- Funnel Core: `docs/Sales/active/05_shop_master.csv`, `docs/Sales/active/06_shop_master_funnel_spec.md`
- Changelog: `docs/changelog/2026-02-25_phase_4_2b_final_changelog.md`
- Archive: `archive/phase_doc_consolidation_20260309/`
- Archive: `archive/phase_strategy_ops_merge_20260309/`
- Archive: `archive/phase_website_legacy_20260309/result_static_site/`
- Sales Archive: `docs/Sales/archive/phase_marketing_consolidation_20260309/`
- Plan: `website/plan/birdsnest_master_plan.md`
- Legacy Tools: `website/legacy_tools/str/`
- Raw Media Source: `data/raw_media_source/raw_media/`
- Web Entry: `website/src/app/page.js`, `website/src/app/layout.js`, `website/src/app/globals.css`

---

## 10) 2026-03-31 香港樣本到貨更新與流程判斷

### Latest Evidence
- 到貨照片：`data/到香港的貨(碎) 1.jpeg`、`data/到香港的貨(碎) 2.jpeg`、`data/到香港的貨(碎) 3.jpeg`
- 觀察：第 3 張顯示明顯碎裂；目前未能確認屬包裝保護不足還是運輸途中受損。

### Field Situation Summary
- 情況 1：貨到香港後約一星期未處理，原因為唯一可接手者當時去了其他地方，未即時 process。
- 情況 2：本地協力人目前更接近「幫忙」而非正式 operator；油錢、lab 錢皆可能需要其先行墊付，因此其主觀上不願承擔過高要求或高頻催辦。
- 情況 3：ZeRo 判斷此案真正暴露的是做事方法問題，而不只是要求高低問題。`lab` 本屬關鍵前置節點，理應在收貨前先完成流程詢問，收貨後即刻送驗，以避免 `5-7` 個工作日 + 假期疊加，直接拖慢證書產出與後續問價。
- 情況 4：現階段香港端只有一個願意動手的人，因此可暫時保留，但只能視作低配協力點，不可再假設其具備 owner 級流程意識。

### Strategic Judgment
- 判斷：ZeRo 對「流程與時效」的觀察較準確；partner 對「零預算下不能把人當 full operator 用」的描述也成立，但不足以合理化本次延誤。
- 結論：這不是單純的態度問題，而是 `ownership` 與角色認知問題。ZeRo 是用 owner 腦在看待關鍵路徑；香港協力人則更接近幫忙者心態。
- 合作定位：香港協力人 `可留但不可重押`；只適合處理慢速、低風險、低時效任務，不適合承擔決定貨值與節奏的關鍵流程。
- 專案定位：Birdnest 目前仍應維持 `Conditional Freeze`；現有樣本更適合視為流程測試樣本，而非已進入正式營運的貨盤。

### Process Log / Decision Log (2026-03-31)
- Process Log: 實體樣本已到港並完成到貨拍照；已觀察到碎裂風險，但 lab 流程未預先釐清，導致收貨後未即送驗。
- Process Log: 因香港端只有單一協力點，且對方非付費 operator，本輪已證實不宜將時效與主動管理責任放在其身上。
- Decision Log: 後續若仍使用香港協力人，ZeRo 必須自己定義流程與問題清單，對方只執行明確、低阻力步驟（如代問 lab、送件、拍照、回報）。
- Decision Log: 在未具備 `可成交量 + lab 預算 + 更可控執行點` 前，Birdnest 不應升級為主線投入。

### Minimum Operating Rule (HK Node)
- 電話可溝通，但所有關鍵進度必須回落文字。
- 最低更新格式固定為：`done / next / blocked / owner / due`。
- 未來若香港端連最低限度文字紀錄也無法配合，則其合作上限維持在一次性幫忙，不可再向 partner 方向發展。

---

## 11) 2026-06-18 台灣前輩燕窩市場訪談消化

Source: `tmp/docs/johnny_birdnest_raw_transcription.md`

### Durable Market Lessons

- 台灣中藥行/傳統渠道通常懂貨，但買斷價會受既有供應鏈、合法入口、批量優勢壓低；不要假設可用零售價或小批成本推算可成交價。
- 若要賣斷，中藥行更可能要求先驗貨後付款；先收錢再進貨不現實。
- 寄售/先放貨模式在傳統渠道較常見，但會增加現金流與貨權風險。
- 香港市場偏小，且本地商家本身有印尼/既有入口渠道；不應把香港視為高確定性放量市場。
- 大陸需求是燕窩價格起飛的核心來源，但百度/網站曝光不等於流量，真正問題是信任與客源取得。
- `漢泉` 可作歷史品牌資產使用，因為有舊品牌痕跡與可搜尋性；但品牌存在不等於有有效 lead。
- 乾燕窩可長期保存，現貨庫存風險低於即食燕窩；即食/鮮燉類有保質期與庫存損耗風險。
- 品質辨識重點包括是否加膠、重量是否自然、是否過乾易碎、完整片 vs 燕碎、泡煮後是否化水；但實際交易仍要靠懂貨買家驗貨。

### Strategy Update

- Birdnest 繼續維持 `Conditional Freeze`。
- 不應啟動大額入貨、網站投放或大陸推廣，除非先取得明確買家/渠道承諾。
- 下一步如要低成本推進，只適合做 `buyer discovery`：找中藥行/熟人渠道確認買斷價、寄售條件、驗貨要求與最低量。
- `>=300g 可成交承諾量` gate 維持不變。

### Do Not

- 不因「有網站/懂電腦」就假設可賣出燕窩。
- 不用淘寶/零售展示價作為批發成交價依據。
- 不把香港單一協力點升級成核心 operator。
