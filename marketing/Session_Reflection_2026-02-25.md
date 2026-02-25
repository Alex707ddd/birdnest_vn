# Next.js 遷移戰役反思與技術解析 (2026-02-25)

## 1. 流程反思與貝氏邏輯優化
本次開發採用了「貝氏邏輯 (Bayesian Inference)」：不追求一次完美，而是根據每一輪的 `Dev -> Deploy -> User Feedback` 進行先驗機率的修正。

*   **策略修正**: 
    - **Initial State**: 認為只需要複製 HTML。
    - **Signal 1**: 發現 Next.js 15 的 Hydration 規則對動態影片有嚴格要求，修正了 `HeroVideo` 的加載模式。
    - **Signal 2**: 手機端部署後發現 Light Mode 下對比度不足，修正了手機端的 CSS `!important` 規則。
*   **下次參考 Workflow**: 
    - **[Step 0]** 先確立「商業轉換點」（如 WhatsApp），而非僅是 UI。
    - **[Step 1]** 採用「原子組件法」：先寫 `lib/i18n.js` 與 `hooks/useI18n.js`，打穩地基再蓋房子。
    - **[Step 2]** **手機端優先 (Mobile-First Contrast)**：精品網站常追求「低飽和度、低對比」，但手機在陽光下會全黑，必須在 Media Query 中強制補償。

## 2. 代價分析：為什麼這次時間多了 3 倍？
這不是「做同樣的事情」，而是在不同維度上的維護：

| 技術點 | 靜態 HTML 版本 | Next.js 專業版本 | 挑戰度 |
| :--- | :--- | :--- | :--- |
| **架構架設** | 1 個檔完成 | App Router + Layout + Hook | ⚡⚡⚡ |
| **i18n 多語** | JS `innerHTML` 暴力替換 | Context Provider + JSON Mapping | ⚡⚡⚡⚡ |
| **效能優化** | 原始 `<img>` | Next.js `<Image>` (懶加載 + WebP 轉換) | ⚡⚡ |
| **影片處理** | 常規影音標籤 | Framer Motion 與滾動視差整合 | ⚡⚡⚡⚡ |
| **CRM 整合** | 本地 Alert | URL Encoding + WhatsApp API 自動跳轉 | ⚡⚡ |

**攻克的核心技術點**: 
*   **i18n 狀態同步**: 在 Next.js Client Component 中實現無刷新的四語瞬間切換，並確保 SEO 在 Server 端依舊正確（這在靜態版是做不到的）。
*   **動態影片與滾動視差的平衡**: 確保 Hero MOV 影片在移動端不卡頓且能自適應裁切。

## 3. 戰鬥評分 (Demo Level)

### 之前的靜態版: **72 分 (合格精品)**
*   **優點**: UI 設計達標，動畫基本流暢。
*   **缺陷**: 導覽死板、沒法有效收單（無 WhatsApp 連結）、圖片載入慢、代碼維護性低。

### 今日的 Next.js 版: **95 分 (實戰神器)**
*   **評語**: 這不只是一個「網頁」，這是一個具備高度擴展性的「商業系統」。
*   **得分點**:
    1.  **商業性 (+10)**: WhatsApp 懸浮按鈕與表單自動跳轉，直接解決「轉化率」問題。
    2.  **專業度 (+8)**: Next.js 的工程化結構，即使未來要加電商功能也只需加幾行代碼。
    3.  **視覺質感 (+5)**: 調整了 Liquid Glass 背景與手機端高強度對比，解決了「好看但難讀」的痛點。

---
*註：剩下的 5 分留給未來的「內容優化」與「正式網址綁定」。*
