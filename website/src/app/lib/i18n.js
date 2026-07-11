export const DEFAULT_LANGUAGE = "zh-TW";

export const languages = [
  { code: "zh-TW", label: "繁" },
  { code: "zh-CN", label: "简" },
  { code: "en", label: "EN" },
  { code: "vi", label: "VN" }
];

export const productMedia = [
  {
    id: "premium",
    image: "/assets/IMG_2783.JPG",
    badgeKey: "best"
  },
  {
    id: "gift",
    image: "/assets/gift-box-display.jpg",
    badgeKey: null
  },
  {
    id: "canned",
    video: "/assets/d875a26c7ddd14b62f3d39f09a976668.mp4",
    badgeKey: "new"
  }
];

export const translations = {
  "zh-TW": {
    nav: {
      home: "首頁 | Home",
      craft: "匠心 | Craft",
      collection: "御品 | Collection",
      ritual: "燉煮 | Ritual",
      booking: "預約 | Booking",
      brand: "漢泉燕窩"
    },
    hero: {
      caption: "Vietnam Premium Origin",
      title: "傳承千年",
      subtitle: "天賜珍品",
      desc: "SGS 香港檢測 · 越南工廠證書 · 純手工挑毛",
      cta: "查看煮法教學",
      proofCta: "立即預約訂購"
    },
    evidence: {
      title: "獨立專業檢測與食安認證",
      subtitle: "Quality Proof & Certification",
      desc: "每一盞燕窩均經過獨立權威檢驗，加工生產流程符合危害分析與關鍵控制點安全管理，透明公開，安心滋補。",
      sgs: {
        title: "SGS 香港化驗報告",
        dateLabel: "報告日期",
        dateValue: "2026年4月30日",
        sampleLabel: "樣品描述",
        sampleValue: "燕窩 / Bird's Nest",
        originLabel: "原產地",
        originValue: "越南 (Vietnam)",
        destLabel: "目的地",
        destValue: "香港 (Hong Kong)",
        itemLabel: "檢測項目",
        itemValue: "亞硝酸鹽 (Nitrite)",
        resultLabel: "檢測結果",
        resultValue: "9 mg/kg",
        note: "* 亞硝酸鹽乃天然物質。本樣品檢出值 9 mg/kg 屬低水平，遠低於常見食安參考上限；SGS 香港報告原圖可點擊查閱。",
        viewReport: "點擊放大查閱 SGS 香港報告原圖"
      },
      haccp: {
        title: "HACCP 安全加工認證",
        facilityLabel: "認證工廠",
        facilityValue: "SGS 檢驗標準加工廠",
        scopeLabel: "認證範圍",
        scopeValue: "燕窩產品之加工及包裝、鮮燉燕窩飲料之製造",
        desc: "原料挑毛、包裝到鮮燉，全程採用無塵室規格與 HACCP (危害分析重要管制點) 體系生產，確保每一步驟無污染，為您的健康嚴格把關。",
        viewCert: "越南衛生部監管與合格加工廠認證"
      },
      close: "關閉",
      prev: "上一張",
      next: "下一張"
    },
    trust: {
      items: [
        { title: "100% 純天然", desc: "無化學添加，保留原始營養 EGF" },
        { title: "手工挑毛", desc: "資深匠人精細挑選，極高潔淨度" },
        { title: "檢驗合格", desc: "嚴格把關，符合香港食安標準" },
        { title: "產地直送", desc: "越南優質產區，無中間商加價" }
      ]
    },
    craft: {
      caption: "Craftsmanship",
      title: "匠心獨運",
      subtitle: "傳統手工的堅持",
      desc: "每一盞燕窩皆由越南當地資深匠人於無塵工作間純手工挑毛，配合專用鑷子細緻去除羽毛與雜質，保留完整營養結構。",
      steps: [
        { title: "原產地採摘", desc: "嚴選優質燕屋，確保源頭純淨" },
        { title: "純淨水挑毛", desc: "拒絕化學漂白，以純人工確保食品安全" },
        { title: "低溫風乾塑形", desc: "完美鎖住 EGF 生長因子與優質蛋白" }
      ]
    },
    collection: {
      title: "御品系列",
      accent: "Collections",
      desc: "送禮要有體面，日常滋補要有證據。以 SGS 香港檢測與越南工廠證書建立第一層信任，再以實物、煮法與口感完成成交。",
      badges: {
        best: "Best Seller",
        new: "全新上市"
      },
      products: {
        premium: {
          title: "頂級乾燕盞",
          subtitle: "Premium Dry Nest",
          desc: "完整盞型與清晰絲條，適合第一次建立信任、送禮展示與高端客戶試單。重點不是平價，而是看得見的品質感。"
        },
        gift: {
          title: "尊爵禮盒裝",
          subtitle: "Luxury Gift Set",
          desc: "為送禮場景設計的體面包裝，適合長輩、客戶與重要關係。比單純送食品更容易表達重視與質感。"
        },
        canned: {
          title: "鮮燉即食燕窩",
          subtitle: "Canned Bird's Nest",
          desc: "為忙碌客戶準備的便利選擇，適合先體驗燕窩口感與日常飲用情境，再回到乾燕盞作長期滋補。"
        }
      },
      bookingLink: "預約諮詢"
    },
      process: {
      title: "燉煮五部曲",
      subtitle: "The 5-Step Ritual of Vitality",
      steps: [
        {
          title: "浸泡",
          desc: "純室溫水 45-60 分鐘，禁止使用熱水"
        },
        {
          title: "清理",
          desc: "順紋撕開燕絲，輕輕漂洗瀝乾"
        },
        {
          title: "文火隔水",
          desc: "純水蓋過燕窩，文火隔水慢燉 30 分鐘"
        },
        {
          title: "加配料",
          desc: "起鍋前 5 分鐘，加入冰糖與紅棗"
        },
        {
          title: "享用",
          desc: "空腹食用吸收最佳，冷藏可保存三天"
        }
      ],
      tipsTitle: "三大禁忌 (Secret Tips)",
      tips: [
        "不可用熱水浸泡：會瞬間破壞蛋白質結構，導致口感軟爛。",
        "不可大火煮沸：激烈翻滾會使燕窩化水，必須隔水文火慢燉。",
        "不可過度清洗：避免水溶性營養（如 EGF）流失。"
      ]
    },
    booking: {
      title: "預約與訂購",
      subtitle: "填寫以下資料，我們的專員將透過 WhatsApp 或 Zalo 與您聯繫確認庫存與報價。",
      fields: {
        name: "姓名 / Name",
        phone: "聯絡電話 / WhatsApp / Zalo",
        product: "有興趣的產品 / Interested Product",
        message: "留言 / Message (Optional)",
        submit: "送出預約 Submit",
        submitting: "送出中..."
      },
      placeholders: {
        name: "王小明",
        phone: "+852 9876 5432",
        message: "可留下份量需求、送禮用途或預算"
      },
      options: {
        premium: "頂級乾燕盞 Premium Dry Nest",
        gift: "尊爵禮盒裝 Luxury Gift Set",
        canned: "鮮燉即食燕窩 Canned Bird's Nest"
      },
      successMessage: "感謝預約，我們將盡快聯絡您！",
      errors: {
        invalid_name: "請輸入有效姓名。",
        invalid_phone: "請輸入有效聯絡電話。",
        invalid_product: "請選擇產品。",
        invalid_message: "留言內容過長，請精簡後再試。",
        too_fast: "提交過快，請稍候再送出。",
        rate_limited: "提交過於頻繁，請稍後再試。",
        network: "網路不穩定，請稍後重試。",
        unknown: "提交失敗，請稍後再試。"
      }
    },
    footer: {
      about:
        "源自越南頂級產區，不經中介，由產地直達。我們堅持以傳統手工挑毛，為每一位追求健康與美麗的客戶，提供最純淨、安全的天然燕窩。",
      contactTitle: "聯絡方式",
      preOrderOnly: "只限預購 (Pre-order Only)",
      shipping: "HK / TW / VN Shipping",
      email: "contact@vnbirdnest.com",
      certTitle: "合法認證",
      certItems: ["100% 天然認證", "符合進口食品安全準則", "SGS 檢驗標準加工廠"],
      legal: "© 2026 Vietnam Birdnest Co., Ltd. All rights reserved.",
      links: ["Privacy", "Terms"]
    }
  },
  "zh-CN": {
    nav: {
      home: "首页 | Home",
      craft: "匠心 | Craft",
      collection: "御品 | Collection",
      ritual: "炖煮 | Ritual",
      booking: "预约 | Booking",
      brand: "漢泉燕窩"
    },
    hero: {
      caption: "Vietnam Premium Origin",
      title: "传承千年",
      subtitle: "天赐珍品",
      desc: "SGS 香港检测 · 越南工厂证书 · 纯手工挑毛",
      cta: "查看炖煮教学",
      proofCta: "立即预约订购"
    },
    evidence: {
      title: "独立专业检测与食安认证",
      subtitle: "Quality Proof & Certification",
      desc: "每一盏燕窝均经过独立权威检验，加工生产流程符合危害分析与关键控制点安全管理，透明公开，安心滋补。",
      sgs: {
        title: "SGS 香港化验报告",
        dateLabel: "报告日期",
        dateValue: "2026年4月30日",
        sampleLabel: "样品描述",
        sampleValue: "燕窝 / Bird's Nest",
        originLabel: "原产地",
        originValue: "越南 (Vietnam)",
        destLabel: "目的地",
        destValue: "香港 (Hong Kong)",
        itemLabel: "检测项目",
        itemValue: "亚硝酸盐 (Nitrite)",
        resultLabel: "检测结果",
        resultValue: "9 mg/kg",
        note: "* 亚硝酸盐乃天然物质。本样品检出值 9 mg/kg 属低水平，远低于常见食安参考上限；SGS 香港报告原图可点击查阅。",
        viewReport: "点击放大查阅 SGS 香港报告原图"
      },
      haccp: {
        title: "HACCP 安全加工认证",
        facilityLabel: "认证工厂",
        facilityValue: "SGS 检验标准加工厂",
        scopeLabel: "认证范围",
        scopeValue: "燕窝产品之加工及包装、鲜炖燕窝饮料之制造",
        desc: "原料挑毛、包装到鲜炖，全程采用无尘室规格与 HACCP (危害分析重要管制点) 体系生产，确保每一步骤无污染，为您的健康严格把关。",
        viewCert: "越南卫生部监管与合格加工厂认证"
      },
      close: "关闭",
      prev: "上一张",
      next: "下一张"
    },
    trust: {
      items: [
        { title: "100% 纯天然", desc: "无化学添加，保留原始营养 EGF" },
        { title: "手工挑毛", desc: "资深匠人精细挑选，极高清洁度" },
        { title: "检验合格", desc: "严格把关，符合香港食安标准" },
        { title: "产地直送", desc: "越南优质产区，无中间商加价" }
      ]
    },
    craft: {
      caption: "Craftsmanship",
      title: "匠心独运",
      subtitle: "传统手工的坚持",
      desc: "每一盏燕窝皆由越南当地资深匠人在无尘车间纯手工挑毛，细致去除羽毛与杂质，保留完整营养结构。",
      steps: [
        { title: "原产地采摘", desc: "严选优质燕屋，确保源头纯净" },
        { title: "纯净水挑毛", desc: "拒绝化学漂白，以纯人工确保食品安全" },
        { title: "低温风干塑形", desc: "完美锁住 EGF 生长因子与优质蛋白" }
      ]
    },
    collection: {
      title: "御品系列",
      accent: "Collections",
      desc: "送礼要有体面，日常滋补要有证据。以 SGS 香港检测与越南工厂证书建立第一层信任，再以实物、煮法与口感完成成交。",
      badges: {
        best: "Best Seller",
        new: "全新上市"
      },
      products: {
        premium: {
          title: "顶级干燕盏",
          subtitle: "Premium Dry Nest",
          desc: "完整盏型与清晰丝条，适合第一次建立信任、送礼展示与高端客户试单。重点不是平价，而是看得见的品质感。"
        },
        gift: {
          title: "尊爵礼盒装",
          subtitle: "Luxury Gift Set",
          desc: "为送礼场景设计的体面包装，适合长辈、客户与重要关系。比单纯送食品更容易表达重视与质感。"
        },
        canned: {
          title: "鲜炖即食燕窝",
          subtitle: "Canned Bird's Nest",
          desc: "为忙碌客户准备的便利选择，适合先体验燕窝口感与日常饮用情境，再回到干燕盏作长期滋补。"
        }
      },
      bookingLink: "预约咨询"
    },
    process: {
      title: "炖煮五部曲",
      subtitle: "The 5-Step Ritual of Vitality",
      steps: [
        {
          title: "浸泡",
          desc: "纯室温水 45-60 分钟，禁止使用热水"
        },
        {
          title: "清理",
          desc: "顺纹撕开燕丝，轻轻漂洗沥干"
        },
        {
          title: "文火隔水",
          desc: "纯水盖过燕窝，文火隔水慢炖 30 分钟"
        },
        {
          title: "加配料",
          desc: "起锅前 5 分钟，加入冰糖与红枣"
        },
        {
          title: "享用",
          desc: "空腹食用吸收最佳，冷藏可保存三天"
        }
      ],
      tipsTitle: "三大禁忌 (Secret Tips)",
      tips: [
        "不可用热水浸泡：会瞬间破坏蛋白质结构，导致口感软烂。",
        "不可大火煮沸：激烈翻滚会使燕窝化水，必须隔水文火慢炖。",
        "不可过度清洗：避免水溶性营养（如 EGF）流失。"
      ]
    },
    booking: {
      title: "预约与订购",
      subtitle: "填写以下资料，我们的专员将透过 WhatsApp 或 Zalo 与您联系确认库存与报价。",
      fields: {
        name: "姓名 / Name",
        phone: "联络电话 / WhatsApp / Zalo",
        product: "有兴趣的产品 / Interested Product",
        message: "留言 / Message (Optional)",
        submit: "送出预约 Submit",
        submitting: "提交中..."
      },
      placeholders: {
        name: "张小明",
        phone: "+852 9876 5432",
        message: "可留下份量需求、送礼用途或预算"
      },
      options: {
        premium: "顶级干燕盏 Premium Dry Nest",
        gift: "尊爵礼盒装 Luxury Gift Set",
        canned: "鲜炖即食燕窝 Canned Bird's Nest"
      },
      successMessage: "感谢预约，我们将尽快联系您！",
      errors: {
        invalid_name: "请输入有效姓名。",
        invalid_phone: "请输入有效联系电话。",
        invalid_product: "请选择产品。",
        invalid_message: "留言内容过长，请精简后再试。",
        too_fast: "提交过快，请稍候再提交。",
        rate_limited: "提交过于频繁，请稍后再试。",
        network: "网络异常，请稍后重试。",
        unknown: "提交失败，请稍后再试。"
      }
    },
    footer: {
      about:
        "源自越南顶级产区，不经中介，由产地直达。我们坚持以传统手工挑毛，为每一位追求健康与美丽的客户，提供最纯净、安全的天然燕窝。",
      contactTitle: "联络方式",
      preOrderOnly: "只限预购 (Pre-order Only)",
      shipping: "HK / TW / VN Shipping",
      email: "contact@vnbirdnest.com",
      certTitle: "合法认证",
      certItems: ["100% 天然认证", "符合进口食品安全准则", "SGS 检验标准加工厂"],
      legal: "© 2026 Vietnam Birdnest Co., Ltd. All rights reserved.",
      links: ["Privacy", "Terms"]
    }
  },
  en: {
    nav: {
      home: "Home",
      craft: "Craft",
      collection: "Collection",
      ritual: "Ritual",
      booking: "Booking",
      brand: "VN.Birdnest"
    },
    hero: {
      caption: "Vietnam Premium Origin",
      title: "A Millennium Heritage",
      subtitle: "Nature's Gift",
      desc: "SGS Hong Kong testing, Vietnam facility certificate, hand-picked craftsmanship, and premium gifting presentation.",
      cta: "View Cooking Guide",
      proofCta: "Order Inquiry"
    },
    evidence: {
      title: "Independent Quality Verification",
      subtitle: "Quality Proof & Certification",
      desc: "Every batch of bird's nest undergoes testing by accredited laboratories and complies with international hazard control standards for absolute transparency.",
      sgs: {
        title: "SGS Hong Kong Lab Report",
        dateLabel: "Report Date",
        dateValue: "30 Apr 2026",
        sampleLabel: "Description",
        sampleValue: "Bird's Nest / 燕窩",
        originLabel: "Origin",
        originValue: "Vietnam",
        destLabel: "Destination",
        destValue: "Hong Kong",
        itemLabel: "Test Item",
        itemValue: "Nitrite",
        resultLabel: "Test Result",
        resultValue: "9 mg/kg",
        note: "* Nitrite is naturally occurring. The result of 9 mg/kg is low and well below common food-safety reference levels; tap to review the original SGS Hong Kong report.",
        viewReport: "Tap to zoom SGS Hong Kong report"
      },
      haccp: {
        title: "HACCP Safety Standard",
        facilityLabel: "Certified Facility",
        facilityValue: "SGS Compliant Processing Plant",
        scopeLabel: "Certified Scope",
        scopeValue: "Processing and packaging of bird's nest and stewed beverages",
        desc: "Our processing and double-boiling bottling cleanrooms adhere strictly to HACCP principles, guaranteeing zero contamination from harvest to table.",
        viewCert: "Ministry of Health Regulated Processing Standard"
      },
      close: "Close",
      prev: "Prev",
      next: "Next"
    },
    trust: {
      items: [
        { title: "100% Natural", desc: "No chemical additives with nutrients preserved" },
        { title: "Hand Picked", desc: "Cleaned by experienced artisans with precision" },
        { title: "Certified Safe", desc: "Strict quality control for HK food safety standards" },
        { title: "Direct Supply", desc: "Premium Vietnam origin, no middleman markup" }
      ]
    },
    craft: {
      caption: "Craftsmanship",
      title: "Master Artisans",
      subtitle: "The Traditional Way",
      desc: "Every nest is processed by senior artisans in a dust-free facility, fully by hand with dedicated tools to remove tiny impurities while preserving natural nutrition.",
      steps: [
        { title: "Origin Harvesting", desc: "Selected from premium bird houses" },
        { title: "Purified Water Cleaning", desc: "No bleach, manual cleaning for safety" },
        { title: "Low-Temperature Drying", desc: "Locks in EGF factors and high-quality protein" }
      ]
    },
    collection: {
      title: "Premium",
      accent: "Collections",
      desc: "Premium gifting needs presentation; daily wellness needs proof. SGS Hong Kong testing and Vietnam facility certification create the first layer of trust.",
      badges: {
        best: "Best Seller",
        new: "New Arrival"
      },
      products: {
        premium: {
          title: "Premium Dry Nest",
          subtitle: "Signature Grade",
          desc: "A complete, premium-looking dry nest for first trust building, gifting, and high-value trial orders. The appeal is visible quality, not cheap pricing."
        },
        gift: {
          title: "Luxury Gift Set",
          subtitle: "Golden Edition",
          desc: "Designed for gifting to elders, clients, and important relationships where presentation and perceived value matter."
        },
        canned: {
          title: "Canned Bird's Nest",
          subtitle: "Ready To Eat",
          desc: "A convenient entry option for busy customers to experience the texture and daily use case before moving into dry nest."
        }
      },
      bookingLink: "Book Consultation"
    },
    process: {
      title: "The 5-Step Ritual",
      subtitle: "The 5-Step Ritual of Vitality",
      steps: [
        {
          title: "Soak",
          desc: "Use room-temperature water for 45-60 minutes. Never use hot water."
        },
        {
          title: "Clean",
          desc: "Tear strands along the grain and rinse gently."
        },
        {
          title: "Double Boil",
          desc: "Cover with water and simmer with indirect heat for 30 minutes."
        },
        {
          title: "Add Ingredients",
          desc: "Add rock sugar and dates in the last 5 minutes."
        },
        {
          title: "Enjoy",
          desc: "Best consumed on an empty stomach; chilled storage up to 3 days."
        }
      ],
      tipsTitle: "Three Taboos (Secret Tips)",
      tips: [
        "No hot water soaking: it damages protein structure instantly.",
        "No rapid boiling: violent boiling melts strands into liquid.",
        "No over-washing: avoid nutrient loss such as EGF."
      ]
    },
    booking: {
      title: "Booking & Inquiry",
      subtitle: "Leave your details below and our specialist will contact you via WhatsApp or Zalo for stock and quotation.",
      fields: {
        name: "Name",
        phone: "Contact Number / WhatsApp / Zalo",
        product: "Interested Product",
        message: "Message (Optional)",
        submit: "Submit Booking",
        submitting: "Submitting..."
      },
      placeholders: {
        name: "John Doe",
        phone: "+852 9876 5432",
        message: "Leave quantity, gifting purpose, or budget details"
      },
      options: {
        premium: "Premium Dry Nest",
        gift: "Luxury Gift Set",
        canned: "Canned Bird's Nest"
      },
      successMessage: "Thank you for booking. We will contact you shortly.",
      errors: {
        invalid_name: "Please enter a valid name.",
        invalid_phone: "Please enter a valid contact number.",
        invalid_product: "Please choose a product.",
        invalid_message: "Message is too long. Please shorten it.",
        too_fast: "Submission is too fast. Please try again in a moment.",
        rate_limited: "Too many requests. Please try again later.",
        network: "Network issue. Please retry shortly.",
        unknown: "Submission failed. Please try again later."
      }
    },
    footer: {
      about:
        "Sourced from top-tier origins in Vietnam and shipped direct without middlemen. We insist on traditional hand-picking to provide pure, safe natural bird's nest.",
      contactTitle: "Contact",
      preOrderOnly: "Pre-order Only",
      shipping: "HK / TW / VN Shipping",
      email: "contact@vnbirdnest.com",
      certTitle: "Certifications",
      certItems: ["100% Natural Certified", "Import Food Safety Compliant", "SGS Standard Processing Facility"],
      legal: "© 2026 Vietnam Birdnest Co., Ltd. All rights reserved.",
      links: ["Privacy", "Terms"]
    }
  },
  vi: {
    nav: {
      home: "Trang chủ",
      craft: "Thủ công",
      collection: "Sản phẩm",
      ritual: "Chế biến",
      booking: "Đặt hàng",
      brand: "VN.Birdnest"
    },
    hero: {
      caption: "Vietnam Premium Origin",
      title: "Di sản ngàn năm",
      subtitle: "Quà tặng thiên nhiên",
      desc: "Kiểm nghiệm SGS Hong Kong, chứng nhận nhà máy Việt Nam, làm sạch thủ công và trình bày quà tặng cao cấp.",
      cta: "Xem hướng dẫn chưng",
      proofCta: "Đặt hàng tư vấn"
    },
    evidence: {
      title: "Kiểm Định Chất Lượng Độc Lập",
      subtitle: "Quality Proof & Certification",
      desc: "Mỗi lô tổ yến đều được kiểm nghiệm bởi phòng thí nghiệm độc lập và tuân thủ các quy trình an toàn thực phẩm quốc tế để mang lại sự minh bạch tuyệt đối.",
      sgs: {
        title: "Báo Cáo Kiểm Nghiệm SGS Hong Kong",
        dateLabel: "Ngày báo cáo",
        dateValue: "30/04/2026",
        sampleLabel: "Mô tả mẫu",
        sampleValue: "Tổ Yến / Bird's Nest (燕窩)",
        originLabel: "Xuất xứ",
        originValue: "Việt Nam",
        destLabel: "Điểm đến",
        destValue: "Hong Kong",
        itemLabel: "Chỉ tiêu kiểm nghiệm",
        itemValue: "Nitrite",
        resultLabel: "Kết quả",
        resultValue: "9 mg/kg",
        note: "* Nitrite là chất tự nhiên. Kết quả 9 mg/kg ở mức thấp và thấp hơn nhiều so với các mức tham chiếu an toàn thực phẩm phổ biến; có thể xem báo cáo SGS Hong Kong gốc.",
        viewReport: "Nhấp để phóng to báo cáo SGS Hong Kong"
      },
      haccp: {
        title: "Chứng Nhận An Toàn HACCP",
        facilityLabel: "Nhà máy sản xuất",
        facilityValue: "Nhà máy chế biến tiêu chuẩn SGS",
        scopeLabel: "Phạm vi chứng nhận",
        scopeValue: "Chế biến & đóng gói sản phẩm tổ yến, sản xuất đồ uống yến chưng tươi",
        desc: "Mọi quy trình từ làm sạch thủ công, đóng gói đến chưng cất đều tuân thủ nghiêm ngặt nguyên lý HACCP, đảm bảo độ tinh khiết tối đa.",
        viewCert: "Chứng nhận tiêu chuẩn chế biến của Bộ Y Tế"
      },
      close: "Đóng",
      prev: "Trước",
      next: "Sau"
    },
    trust: {
      items: [
        { title: "100% Tự nhiên", desc: "Không hóa chất, giữ nguyên dưỡng chất EGF" },
        { title: "Nhặt lông thủ công", desc: "Được làm sạch tỉ mỉ bởi nghệ nhân" },
        { title: "Chứng nhận an toàn", desc: "Tuân thủ tiêu chuẩn an toàn thực phẩm HK" },
        { title: "Giao hàng trực tiếp", desc: "Từ vùng nguyên liệu Việt Nam, không qua trung gian" }
      ]
    },
    craft: {
      caption: "Craftsmanship",
      title: "Nghệ nhân",
      subtitle: "Truyền thống thủ công",
      desc: "Chúng tôi hiểu rằng chất lượng tốt nhất đến từ sự tinh tế. Mỗi tổ yến đều được xử lý cẩn thận bởi các nghệ nhân lâu năm tại Việt Nam trong phòng sạch, hoàn toàn bằng tay với nhíp chuyên dụng.",
      steps: [
        { title: "Thu hoạch tận gốc", desc: "Lựa chọn kỹ từ các nhà yến cao cấp" },
        { title: "Làm sạch bằng nước tinh khiết", desc: "Không chất tẩy trắng, an toàn thực phẩm" },
        { title: "Sấy lạnh nhiệt độ thấp", desc: "Khóa hoàn hảo EGF và protein" }
      ]
    },
    collection: {
      title: "Bộ sưu tập",
      accent: "Cao cấp",
      desc: "Quà tặng cao cấp cần hình ảnh; dùng hằng ngày cần niềm tin. Kiểm nghiệm SGS Hong Kong và chứng nhận nhà máy Việt Nam là lớp tin cậy đầu tiên.",
      badges: {
        best: "Bán chạy nhất",
        new: "Mới ra mắt"
      },
      products: {
        premium: {
          title: "Yến sào cao cấp",
          subtitle: "Premium Dry Nest",
          desc: "Tổ yến khô có hình thức đẹp, phù hợp cho đơn thử đầu tiên, quà tặng và khách hàng cần cảm giác cao cấp."
        },
        gift: {
          title: "Hộp quà sang trọng",
          subtitle: "Luxury Gift Set",
          desc: "Thiết kế cho biếu tặng người lớn tuổi, khách hàng và các mối quan hệ quan trọng cần sự trang trọng."
        },
        canned: {
          title: "Yến sào đóng hộp",
          subtitle: "Canned Bird's Nest",
          desc: "Lựa chọn tiện lợi cho khách bận rộn muốn trải nghiệm hương vị và cách dùng hằng ngày trước khi chọn yến khô."
        }
      },
      bookingLink: "Đặt hàng tư vấn"
    },
    process: {
      title: "5 Bước Chế Biến",
      subtitle: "The 5-Step Ritual of Vitality",
      steps: [
        {
          title: "Ngâm nước",
          desc: "Nước nhiệt độ phòng 45-60 phút, KHÔNG DÙNG NƯỚC NÓNG"
        },
        {
          title: "Làm sạch",
          desc: "Xé sợi theo chiều dọc, rửa nhẹ nhàng"
        },
        {
          title: "Chưng cách thủy",
          desc: "Nước ngập yến, lửa nhỏ trong 30 phút"
        },
        {
          title: "Thêm thành phần",
          desc: "5 phút trước khi xong, thêm đường và táo đỏ"
        },
        {
          title: "Thưởng thức",
          desc: "Ăn khi bụng đói để hấp thu tốt nhất, bảo quản tủ lạnh 3 ngày"
        }
      ],
      tipsTitle: "Ba điều Cấm kỵ (Mẹo bí mật)",
      tips: [
        "Không ngâm nước nóng: phá hủy cấu trúc protein ngay lập tức.",
        "Không đun sôi mạnh: làm yến tan thành nước. Phải chưng cách thủy.",
        "Không rửa quá nhiều: tránh mất dưỡng chất hòa tan như EGF."
      ]
    },
    booking: {
      title: "Đặt hàng & Tư vấn",
      subtitle: "Vui lòng điền thông tin bên dưới, chuyên viên của chúng tôi sẽ liên hệ qua WhatsApp/Zalo.",
      fields: {
        name: "Họ và Tên",
        phone: "Số điện thoại / WhatsApp / Zalo",
        product: "Sản phẩm quan tâm",
        message: "Tin nhắn (Không bắt buộc)",
        submit: "Gửi yêu cầu",
        submitting: "Đang gửi..."
      },
      placeholders: {
        name: "Nguyễn Văn A",
        phone: "+84 912 345 678",
        message: "Để lại số lượng, mức ngân sách hoặc mục đích sử dụng"
      },
      options: {
        premium: "Yến sào cao cấp",
        gift: "Hộp quà sang trọng",
        canned: "Yến sào đóng hộp (Ăn liền)"
      },
      successMessage: "Cảm ơn bạn đã đặt lịch. Chúng tôi sẽ liên hệ sớm nhất.",
      errors: {
        invalid_name: "Vui lòng nhập tên hợp lệ.",
        invalid_phone: "Vui lòng nhập số điện thoại hợp lệ.",
        invalid_product: "Vui lòng chọn sản phẩm.",
        invalid_message: "Nội dung quá dài. Vui lòng rút gọn.",
        too_fast: "Bạn gửi quá nhanh. Vui lòng thử lại sau ít giây.",
        rate_limited: "Bạn gửi quá nhiều lần. Vui lòng thử lại sau.",
        network: "Lỗi mạng. Vui lòng thử lại sau.",
        unknown: "Gửi thất bại. Vui lòng thử lại sau."
      }
    },
    footer: {
      about:
        "Đến từ các vùng nguyên liệu hàng đầu Việt Nam. Chúng tôi theo đuổi phương pháp nhặt lông thủ công truyền thống để cung cấp yến sào tinh khiết và an toàn nhất.",
      contactTitle: "Liên hệ",
      preOrderOnly: "Chỉ nhận đặt trước",
      shipping: "Giao hàng HK / TW / VN",
      email: "contact@vnbirdnest.com",
      certTitle: "Chứng nhận",
      certItems: ["Chứng nhận 100% tự nhiên", "Đạt chuẩn an toàn thực phẩm nhập khẩu", "Cơ sở đạt tiêu chuẩn SGS"],
      legal: "© 2026 Vietnam Birdnest Co., Ltd. Đã đăng ký bản quyền.",
      links: ["Privacy", "Terms"]
    }
  }
};
