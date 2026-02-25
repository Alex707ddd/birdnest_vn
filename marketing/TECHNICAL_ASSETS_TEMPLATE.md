# 通用技術資產庫 (Technical Assets Template)

> 💡 **這份文件的用途：**
> 這是給您的 **`_My_Brain/03_Tech_Stack`** 用的範本。
> 將這些「技術能力」與「具體專案」切開，下次做新專案時，直接調用這裡的 SOP。
>
> **🤖 如何在下一次對話中「掛載」這份文件？ (How to Load)**
> 在新對話的第一句，直接告訴 AI：
> *"我正在開發一個新專案 (Project X)。請先讀取 `_My_Brain/03_Tech_Stack/Website_SOP.md`，以此為標準幫我搭建網站。"*
> 這就像是在 MetaTrader 把 **Indictor (SOP)** 拉進圖表一樣，AI 會瞬間學會您的獨門絕活。

---

## 1. 快速建站模組 (Website Launchpad)
**適用場景：** 任何需要快速建立「專業形象」的生意 (如：燕窩、顧問、貿易)。

### 核心架構 (The Stack)
*   **前端:** HTML5 + TailwindCSS (最輕量，不用裝重型框架)。
*   **部署:** Vercel / GitHub Pages (免費、極速、有 HTTPS)。
*   **功能:**
    *   [ ] **多語言 (i18n):** 必備繁簡英切換 (做貿易必備)。
    *   [ ] **WhatsApp/Line 按鈕:** 懸浮在右下角 (由流量轉私域的關鍵)。
    *   [ ] **產品展示 Grid:** 響應式圖片排列。

### 復用代碼 (Snippets)

```html
<!-- 懸浮聯絡按鈕 (Floating Action Button) -->
<div class="fixed bottom-4 right-4 z-50">
  <a href="https://wa.me/YOUR_NUMBER" class="bg-green-500 text-white p-4 rounded-full shadow-lg">
    <i class="fab fa-whatsapp"></i> 聯絡我們
  </a>
</div>
```

---

## 2. MCP Skills 配置 (MCP Capabilities)
**適用場景：** 需要 AI 幫您操作電腦、連網、寫檔案時。

### 核心 Skills
*   **FileSystem:** 讓 AI 能讀寫您的專案 (必備)。
*   **WebSearch (Brave/Google):** 讓 AI 能做市場調查。
*   **Fetch (Browser):** 讓 AI 能讀取網頁內容 (爬蟲)。

### 設定檔範例
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "f:/ai_agent_projects"]
    }
  }
}
```

---

## 3. SEO 與數位足跡 (Digital Footprint)
**適用場景：** 讓陌生人在 Google 搜尋到您。

### 檢查清單 (Checklist)
*   [ ] **Google My Business:** 申請一個免費商家地標。
*   [ ] **Meta Tags:** 確保每個頁面都有 `og:title`, `og:description`, `og:image`。
