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
    image: "/assets/IMG_2779.JPG",
    badgeKey: "best"
  },
  {
    id: "gift",
    image: "/assets/photo_2026-02-10_10-14-41.jpg",
    badgeKey: null
  },
  {
    id: "family",
    image: "/assets/IMG_2783.JPG",
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
      booking: "預約 | Booking"
    },
    hero: {
      caption: "Vietnam Premium Origin",
      title: "傳承千年",
      subtitle: "天賜珍品",
      desc: "純手工挑毛 · 零化學漂白 · 原產地直送 · 100% Edible Bird's Nest",
      cta: "探索御品系列"
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
      desc: "高倍發頭，絲條粗壯。為孕期滋補、高端贈禮、家庭保養提供最高性價比的選擇。",
      badges: {
        best: "Best Seller",
        new: "全新上市"
      },
      products: {
        premium: {
          title: "頂級乾燕盞",
          subtitle: "Premium Dry Nest",
          desc: "完美盞型，絲條完整粗長，口感軟滑帶微彈。每盞約 8-10g，適合高端贈禮與孕期滋補。"
        },
        gift: {
          title: "尊爵禮盒裝",
          subtitle: "Luxury Gift Set",
          desc: "金色質感立體禮盒，內含頂級乾燕盞、嚴選冰糖與特級紅棗，為您搭配最完美的養生配方。"
        },
        family: {
          title: "精選家庭號",
          subtitle: "Family Selection",
          desc: "去除不規則邊角，保留厚實燕身，營養價值不減。最適合重視 CP 值的日常家庭長期保養。"
        },
        canned: {
          title: "鮮燉即食燕窩",
          subtitle: "Canned Bird's Nest",
          desc: "開罐即食，免去燉煮繁瑣。採用高溫殺菌真空封裝，完美鎖住營養，隨時隨地享受頂級滋補。"
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
        family: "精選家庭號 Family Selection",
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
      booking: "预约 | Booking"
    },
    hero: {
      caption: "Vietnam Premium Origin",
      title: "传承千年",
      subtitle: "天赐珍品",
      desc: "纯手工挑毛 · 零化学漂白 · 原产地直送 · 100% Edible Bird's Nest",
      cta: "探索御品系列"
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
      desc: "高倍发头，丝条粗壮。为孕期滋补、高端赠礼、家庭保养提供最高性价比的选择。",
      badges: {
        best: "Best Seller",
        new: "全新上市"
      },
      products: {
        premium: {
          title: "顶级干燕盏",
          subtitle: "Premium Dry Nest",
          desc: "完美盏型，丝条完整粗长，口感软滑带微弹。每盏约 8-10g，适合高端赠礼与孕期滋补。"
        },
        gift: {
          title: "尊爵礼盒装",
          subtitle: "Luxury Gift Set",
          desc: "金色质感立体礼盒，内含顶级干燕盏、严选冰糖与特级红枣，为您搭配最完美的养生配方。"
        },
        family: {
          title: "精选家庭号",
          subtitle: "Family Selection",
          desc: "去除不规则边角，保留厚实燕身，营养价值不减。最适合重视 CP 值的日常家庭长期保养。"
        },
        canned: {
          title: "鲜炖即食燕窝",
          subtitle: "Canned Bird's Nest",
          desc: "开罐即食，免去炖煮繁琐。采用高温杀菌真空封装，完美锁住营养，随时随地享受顶级滋补。"
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
        family: "精选家庭号 Family Selection",
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
      booking: "Booking"
    },
    hero: {
      caption: "Vietnam Premium Origin",
      title: "A Millennium Heritage",
      subtitle: "Nature's Gift",
      desc: "100% Hand-picked · No Bleach · Direct from Origin",
      cta: "Explore Collection"
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
      desc: "High expansion rate and thick strands, ideal for maternity care, premium gifting, and daily wellness.",
      badges: {
        best: "Best Seller",
        new: "New Arrival"
      },
      products: {
        premium: {
          title: "Premium Dry Nest",
          subtitle: "Signature Grade",
          desc: "Perfect shape with complete, thick strands and a silky springy texture, ideal for gifting and maternity nutrition."
        },
        gift: {
          title: "Luxury Gift Set",
          subtitle: "Golden Edition",
          desc: "A premium gift box with dry nest, rock sugar, and selected dates for a complete tonic pairing."
        },
        family: {
          title: "Family Selection",
          subtitle: "Daily Wellness",
          desc: "Cost-effective daily nourishment with retained nutrition and hearty strands for family use."
        },
        canned: {
          title: "Canned Bird's Nest",
          subtitle: "Ready To Eat",
          desc: "Ready on opening, vacuum packed and sterilized to lock nutrients for modern convenience."
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
        family: "Family Selection",
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
      booking: "Đặt hàng"
    },
    hero: {
      caption: "Vietnam Premium Origin",
      title: "Di sản ngàn năm",
      subtitle: "Quà tặng thiên nhiên",
      desc: "Thủ công 100% · Không tẩy trắng · Trực tiếp từ nguồn",
      cta: "Khám phá Sản phẩm"
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
      desc: "Độ nở cao, sợi yến dày. Sự lựa chọn hoàn hảo cho thai kỳ, quà tặng cao cấp và gia đình.",
      badges: {
        best: "Bán chạy nhất",
        new: "Mới ra mắt"
      },
      products: {
        premium: {
          title: "Yến sào cao cấp",
          subtitle: "Premium Dry Nest",
          desc: "Hình dáng hoàn hảo, sợi dài và dày, kết cấu mềm và hơi dai. Khoảng 8-10g mỗi tổ."
        },
        gift: {
          title: "Hộp quà sang trọng",
          subtitle: "Luxury Gift Set",
          desc: "Hộp quà vàng 3D, gồm yến sào cao cấp, đường phèn và táo đỏ."
        },
        family: {
          title: "Lựa chọn gia đình",
          subtitle: "Family Selection",
          desc: "Đã loại bỏ viền không đều, giữ lại phần thân dày. Lựa chọn kinh tế cho gia đình."
        },
        canned: {
          title: "Yến sào đóng hộp",
          subtitle: "Canned Bird's Nest",
          desc: "Ăn liền tiện lợi. Đóng gói chân không tiệt trùng ở nhiệt độ cao, giữ nguyên dưỡng chất."
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
        family: "Lựa chọn gia đình",
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
