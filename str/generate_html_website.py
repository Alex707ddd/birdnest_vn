
import os
import shutil

HTML_CONTENT = r"""
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-i18n="pageTitle">燕窩品牌 - 傳統精美，專業可信</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&family=Noto+Sans+TC:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="container nav-container">
            <a href="#" class="brand-logo" data-i18n="brandName">燕窩品牌</a>
            <div class="nav-links">
                <a href="#hero" data-i18n="navHome">首頁</a>
                <a href="#about" data-i18n="navAbout">關於燕窩</a>
                <a href="#products" data-i18n="navProducts">精選產品</a>
                <a href="#process" data-i18n="navProcess">傳統工藝</a>
                <a href="#education" data-i18n="navEducation">燕窩百科</a>
                <a href="#contact" data-i18n="navContact">聯絡我們</a>
            </div>
            <div class="lang-switch">
                <span class="lang-btn active" data-lang="tc">繁</span>
                <span class="lang-btn" data-lang="sc">简</span>
                <span class="lang-btn" data-lang="en">EN</span>
                <span class="lang-btn" data-lang="vn">VN</span>
            </div>
            <button class="mobile-menu-btn" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="hero-section">
        <div class="hero-bg-video-placeholder">
            <img src="images/hero-fallback.jpg" alt="Bird's Nest Process" class="hero-bg-img">
        </div>
        <div class="hero-overlay"></div>
        <div class="container hero-content">
            <h1 class="hero-title" data-i18n="heroTitle">傳承千年養生智慧<br>每一盞，皆是天賜珍品</h1>
            <p class="hero-subtitle" data-i18n="heroSubtitle">純手工挑毛 · 零漂白 · 產地直送</p>
            <a href="#products" class="btn btn-primary" data-i18n="ctaExplore">探索燕窩系列</a>
        </div>
    </section>

    <!-- Trust Indicators -->
    <section class="trust-section">
        <div class="container trust-grid">
            <div class="trust-item">
                <div class="trust-icon">🌿</div>
                <h3 data-i18n="trustNaturalTitle">100% 純天然</h3>
                <p data-i18n="trustNaturalDesc">無化學添加，保留原始營養</p>
            </div>
            <div class="trust-item">
                <div class="trust-icon">👐</div>
                <h3 data-i18n="trustHandmadeTitle">手工挑毛</h3>
                <p data-i18n="trustHandmadeDesc">資深匠人精細挑選，潔淨度高</p>
            </div>
            <div class="trust-item">
                <div class="trust-icon">🏆</div>
                <h3 data-i18n="trustCertifiedTitle">SGS 檢驗合格</h3>
                <p data-i18n="trustCertifiedDesc">嚴格把關，食安無憂</p>
            </div>
            <div class="trust-item">
                <div class="trust-icon">✈️</div>
                <h3 data-i18n="trustDirectTitle">產地直送</h3>
                <p data-i18n="trustDirectDesc">越南優質產區，新鮮送達</p>
            </div>
        </div>
    </section>

    <!-- About Introduction -->
    <section id="about" class="about-section section-padding">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title" data-i18n="aboutTitle">東方養生珍品</h2>
                <div class="title-divider"></div>
                <p class="section-desc" data-i18n="aboutSubtitle">富含表皮生長因子 (EGF) 與優質水溶性蛋白，滋潤養顏，調理體質。</p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <p data-i18n="aboutContent">燕窩，自古以來即被視為滋補聖品。我們的每一盞燕窩，皆來自越南純淨燕屋，經過嚴格篩選與傳統手工挑毛工序，確保您品嚐到的每一口，都是大自然的恩賜。</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Products Showcase -->
    <section id="products" class="products-section section-padding bg-light">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title" data-i18n="productsTitle">精選燕窩系列</h2>
                <div class="title-divider"></div>
            </div>
            <div class="products-grid">
                <!-- Product 1: Premium Long-Strand -->
                <div class="product-card">
                    <div class="product-img-wrapper">
                        <div class="magnifier-icon">🔍</div>
                        <img src="images/product-premium.jpg" alt="頂級長絲燕" class="product-img">
                    </div>
                    <div class="product-info">
                        <span class="product-badge premium" data-i18n="badgePremium">頂級贈禮</span>
                        <h3 data-i18n="prodPremiumTitle">頂級長絲官燕</h3>
                        <p class="product-desc" data-i18n="prodPremiumDesc">絲條完整粗長，口感軟滑帶彈性，發頭極佳。</p>
                        <ul class="product-specs">
                            <li data-i18n="prodPremiumSpec1">外型：盞型完美</li>
                            <li data-i18n="prodPremiumSpec2">口感：軟中帶彈</li>
                            <li data-i18n="prodPremiumSpec3">適合：孕期滋補、高端贈禮</li>
                        </ul>
                        <button class="btn btn-outline" data-i18n="btnDetails">查看詳情</button>
                    </div>
                </div>

                <!-- Product 2: Mixed -->
                <div class="product-card">
                    <div class="product-img-wrapper">
                         <div class="magnifier-icon">🔍</div>
                        <img src="images/product-mixed.jpg" alt="精選燕條" class="product-img">
                    </div>
                    <div class="product-info">
                        <span class="product-badge popular" data-i18n="badgePopular">熱銷首選</span>
                        <h3 data-i18n="prodMixedTitle">精選混合燕條</h3>
                        <p class="product-desc" data-i18n="prodMixedDesc">外層長絲包裹內芯短纖，口感層次豐富，CP值高。</p>
                        <ul class="product-specs">
                            <li data-i18n="prodMixedSpec1">外型：條狀不規則</li>
                            <li data-i18n="prodMixedSpec2">口感：滑順有嚼勁</li>
                            <li data-i18n="prodMixedSpec3">適合：日常保養、家庭享用</li>
                        </ul>
                        <button class="btn btn-outline" data-i18n="btnDetails">查看詳情</button>
                    </div>
                </div>

                <!-- Product 3: Shredded -->
                <div class="product-card">
                    <div class="product-img-wrapper">
                         <div class="magnifier-icon">🔍</div>
                        <img src="images/product-shredded.jpg" alt="經濟燕碎" class="product-img">
                    </div>
                    <div class="product-info">
                        <span class="product-badge economy" data-i18n="badgeEconomy">經濟實惠</span>
                        <h3 data-i18n="prodShreddedTitle">純淨燕碎</h3>
                        <p class="product-desc" data-i18n="prodShreddedDesc">短細纖維，口感綿密柔軟，無需長時間燉煮。</p>
                        <ul class="product-specs">
                            <li data-i18n="prodShreddedSpec1">外型：細碎狀</li>
                            <li data-i18n="prodShreddedSpec2">口感：綿軟易入口</li>
                            <li data-i18n="prodShreddedSpec3">適合：長輩小孩、長期調理</li>
                        </ul>
                        <button class="btn btn-outline" data-i18n="btnDetails">查看詳情</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Process Timeline -->
    <section id="process" class="process-section section-padding">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title" data-i18n="processTitle">傳統工藝 匠心製作</h2>
                <div class="title-divider"></div>
            </div>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h4 data-i18n="processStep1Title">1. 原產地採摘</h4>
                        <p data-i18n="processStep1Desc">嚴選越南優質燕屋，確保原料純淨。</p>
                    </div>
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">Step 01</div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h4 data-i18n="processStep2Title">2. 專業殺菌</h4>
                        <p data-i18n="processStep2Desc">現代化設備與標準，確保食品安全。</p>
                    </div>
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">Step 02</div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h4 data-i18n="processStep3Title">3. 手工挑毛</h4>
                        <p data-i18n="processStep3Desc">熟練師傅精挑細選，去除極細雜質。</p>
                    </div>
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">Step 03</div>
                </div>
                 <div class="timeline-item">
                    <div class="timeline-content">
                        <h4 data-i18n="processStep4Title">4. 低溫風乾</h4>
                        <p data-i18n="processStep4Desc">鎖住營養，保留燕窩原始結構。</p>
                    </div>
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">Step 04</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Education / Cooking Ritual -->
    <section id="education" class="education-section section-padding bg-light">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title" data-i18n="eduTitle">燉煮五部曲 (The 5-Step Ritual)</h2>
                <div class="title-divider"></div>
                <p class="section-desc" data-i18n="eduSubtitle">簡單五步，煥活營養與美味</p>
            </div>
            
            <div class="ritual-steps">
                <div class="ritual-step-card">
                    <div class="step-number">01</div>
                    <h4 data-i18n="ritualStep1Title">浸泡 (Soak)</h4>
                    <p data-i18n="ritualStep1Desc">室溫純水浸泡至膨脹軟透。<br><strong>禁忌熱水。</strong></p>
                    <div class="step-tip">
                        <small data-i18n="ritualStep1Tip">碎燕: 20-30m / 官燕: 45-60m</small>
                    </div>
                </div>
                <div class="ritual-step-card">
                    <div class="step-number">02</div>
                    <h4 data-i18n="ritualStep2Title">清理 (Clean)</h4>
                    <p data-i18n="ritualStep2Desc">撕開燕絲，檢查微細雜物，<br>輕輕漂洗瀝乾。</p>
                </div>
                <div class="ritual-step-card">
                    <div class="step-number">03</div>
                    <h4 data-i18n="ritualStep3Title">隔水燉 (Double-Boil)</h4>
                    <p data-i18n="ritualStep3Desc">放入燉盅，水蓋過燕窩。<br><strong>文火慢燉</strong>，鎖住EGF。</p>
                </div>
                <div class="ritual-step-card">
                    <div class="step-number">04</div>
                    <h4 data-i18n="ritualStep4Title">加料 (Infuse)</h4>
                    <p data-i18n="ritualStep4Desc">起鍋前 5 分鐘加入<br>冰糖、紅棗或枸杞。</p>
                </div>
                <div class="ritual-step-card">
                    <div class="step-number">05</div>
                    <h4 data-i18n="ritualStep5Title">享用 (Serve)</h4>
                    <p data-i18n="ritualStep5Desc">細細品嚐絲滑口感。<br>可冷藏保存 3 天。</p>
                </div>
            </div>

            <div class="secret-tips-box">
                <h4><span class="icon">💡</span> <span data-i18n="tipsTitle">燕窩燉煮三大禁忌</span></h4>
                <ul>
                    <li data-i18n="tips1">🚫 <strong>不可用熱水浸泡</strong>：會破壞蛋白質結構，導致口感軟爛。</li>
                    <li data-i18n="tips2">🚫 <strong>不可大火煮沸</strong>：激烈翻滾會使燕窩化水。</li>
                    <li data-i18n="tips3">🚫 <strong>不可過度清洗</strong>：避免水溶性營養流失，輕漂即可。</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="footer">
        <div class="container footer-content">
            <div class="footer-col brand-col">
                <h3 data-i18n="footerBrandName">燕窩品牌</h3>
                <p data-i18n="footerSlogan">傳承經典，養生首選。</p>
            </div>
            <div class="footer-col links-col">
                <h4 data-i18n="footerQuickLinks">快速連結</h4>
                <a href="#about" data-i18n="navAbout">關於我們</a>
                <a href="#products" data-i18n="navProducts">產品系列</a>
                <a href="#education" data-i18n="navEducation">食用教學</a>
            </div>
            <div class="footer-col contact-col">
                <h4 data-i18n="navContact">聯絡我們</h4>
                <p>Email: contact@birdsnest.com</p>
                <div class="social-icons">
                    <a href="#">Line</a>
                    <a href="#">Zalo</a>
                    <a href="#">WhatsApp</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom text-center">
            <p>&copy; 2026 <span data-i18n="footerCopyright">燕窩品牌. All Rights Reserved.</span></p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
"""

CSS_CONTENT = r"""
/* Variables */
:root {
    --primary-bg: #F5F5F0;  /* Warm Jade White */
    --primary-text: #4A3B32; /* Ink Brown */
    --accent-color: #C5A065; /* Imperial Gold */
    --secondary-text: #8C9E98; /* Celadon Gray */
    --white: #FFFFFF;
    --light-gray: #F9F9F9;
    --shadow-sm: 0 4px 6px rgba(0,0,0,0.05);
    --shadow-md: 0 8px 15px rgba(0,0,0,0.08);
    --border-radius: 8px;
    --transition: all 0.3s ease;
}

/* Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Noto Sans TC', sans-serif;
    background-color: var(--primary-bg);
    color: var(--primary-text);
    line-height: 1.6;
    overflow-x: hidden;
    /* Minimal texture placeholder */
    background-image: linear-gradient(to bottom, transparent, rgba(255,255,255,0.5)); 
}

h1, h2, h3, h4, .brand-logo {
    font-family: 'Noto Serif TC', serif;
    font-weight: 700;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    display: block;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section-padding {
    padding: 80px 0;
}

.text-center {
    text-align: center;
}

.bg-light {
    background-color: rgba(255,255,255,0.6);
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.9rem;
    transition: var(--transition);
}

.btn-primary {
    background-color: var(--accent-color);
    color: var(--white);
    border: 1px solid var(--accent-color);
}

.btn-primary:hover {
    background-color: #b08d55;
    border-color: #b08d55;
    transform: translateY(-2px);
}

.btn-outline {
    background-color: transparent;
    color: var(--primary-text);
    border: 1px solid var(--accent-color);
}

.btn-outline:hover {
    background-color: var(--accent-color);
    color: var(--white);
}

/* Typography Helpers */
.section-title {
    font-size: 2.2rem;
    color: var(--primary-text);
    margin-bottom: 10px;
}

.title-divider {
    width: 60px;
    height: 3px;
    background-color: var(--accent-color);
    margin: 0 auto 20px;
}

.section-desc {
    font-size: 1.1rem;
    color: var(--secondary-text);
    max-width: 700px;
    margin: 0 auto;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(245, 245, 240, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 15px 0;
    box-shadow: var(--shadow-sm);
    border-bottom: 1px solid rgba(197, 160, 101, 0.2);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand-logo {
    font-size: 1.8rem;
    color: var(--accent-color);
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-links a {
    font-size: 1rem;
    color: var(--primary-text);
    position: relative;
}

.nav-links a:hover {
    color: var(--accent-color);
}

.lang-switch {
    display: flex;
    gap: 10px;
    font-size: 0.9rem;
}

.lang-switch span {
    cursor: pointer;
    padding: 2px 5px;
}

.lang-switch span.active, .lang-switch span:hover {
    color: var(--accent-color);
    font-weight: bold;
    border-bottom: 2px solid var(--accent-color);
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
}

/* Hero Section */
.hero-section {
    position: relative;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 60px; /* nav height */
    overflow: hidden;
}

.hero-bg-video-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
}

.hero-bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    z-index: -1;
}

.hero-content {
    color: var(--white);
    z-index: 1;
    max-width: 800px;
}

.hero-title {
    font-size: 3.5rem;
    margin-bottom: 20px;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    line-height: 1.3;
}

.hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 40px;
    letter-spacing: 2px;
    font-weight: 300;
}

/* Trust Indicators */
.trust-section {
    background-color: var(--white);
    padding: 40px 0;
    border-bottom: 1px solid #eee;
}

.trust-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    text-align: center;
}

.trust-item {
    padding: 20px;
}

.trust-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: var(--accent-color);
}

.trust-item h3 {
    font-size: 1.1rem;
    margin-bottom: 5px;
    color: var(--primary-text);
}

.trust-item p {
    font-size: 0.9rem;
    color: var(--secondary-text);
}

/* About Content */
.about-content {
    max-width: 800px;
    margin: 40px auto 0;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.8;
}

/* Product Cards */
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-top: 50px;
}

.product-card {
    background: var(--white);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    border: 1px solid rgba(197, 160, 101, 0.2);
    transition: var(--transition);
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
}

.product-img-wrapper {
    height: 250px;
    background-color: #ddd;
    position: relative;
    overflow: hidden;
}

.product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.product-card:hover .product-img {
    transform: scale(1.05);
}

.magnifier-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255,255,255,0.8);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s;
    cursor: pointer;
}

.product-card:hover .magnifier-icon {
    opacity: 1;
}

.product-info {
    padding: 25px;
    text-align: center;
}

.product-badge {
    display: inline-block;
    font-size: 0.75rem;
    padding: 4px 10px;
    border-radius: 20px;
    margin-bottom: 10px;
    letter-spacing: 1px;
    color: var(--white);
}

.product-badge.premium { background-color: #D4AF37; } /* Gold */
.product-badge.popular { background-color: #A83E3E; } /* Red */
.product-badge.economy { background-color: #8C9E98; } /* Green/Gray */

.product-info h3 {
    margin-bottom: 10px;
    font-size: 1.4rem;
}

.product-desc {
    font-size: 0.95rem;
    color: var(--secondary-text);
    margin-bottom: 20px;
}

.product-specs {
    text-align: left;
    margin-bottom: 20px;
    font-size: 0.9rem;
    background: var(--primary-bg);
    padding: 15px;
    border-radius: 4px;
}

.product-specs li {
    margin-bottom: 5px;
    padding-left: 15px;
    position: relative;
}

.product-specs li::before {
    content: "•";
    color: var(--accent-color);
    position: absolute;
    left: 0;
}

/* Timeline */
.timeline {
    position: relative;
    max-width: 800px;
    margin: 50px auto 0;
    padding: 20px 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--accent-color);
    transform: translateX(-50%);
}

.timeline-item {
    position: relative;
    width: 50%;
    padding: 20px 40px;
    box-sizing: border-box;
}

.timeline-item:nth-child(odd) {
    left: 0;
    text-align: right;
}

.timeline-item:nth-child(even) {
    left: 50%;
    text-align: left;
}

.timeline-content h4 {
    margin-bottom: 5px;
    font-size: 1.2rem;
    color: var(--accent-color);
}

.timeline-dot {
    position: absolute;
    width: 16px;
    height: 16px;
    background: var(--white);
    border: 3px solid var(--accent-color);
    border-radius: 50%;
    top: 25px;
}

.timeline-item:nth-child(odd) .timeline-dot { right: -9px; }
.timeline-item:nth-child(even) .timeline-dot { left: -9px; }

.timeline-date {
    position: absolute;
    top: 0;
    font-size: 0.85rem;
    color: #ccc;
    font-weight: bold;
    letter-spacing: 1px;
}

.timeline-item:nth-child(odd) .timeline-date { right: -90px; top: 25px; }
.timeline-item:nth-child(even) .timeline-date { left: -90px; top: 25px; }

/* Ritual Steps */
.ritual-steps {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 40px;
}

.ritual-step-card {
    background: var(--white);
    padding: 30px 20px;
    border-radius: var(--border-radius);
    text-align: center;
    flex: 1;
    min-width: 180px;
    max-width: 220px;
    box-shadow: var(--shadow-sm);
    position: relative;
    overflow: hidden;
    border-top: 3px solid var(--accent-color);
}

.step-number {
    font-size: 2.5rem;
    font-family: 'Playfair Display', serif;
    color: rgba(197, 160, 101, 0.2);
    font-weight: bold;
    margin-bottom: -20px;
    position: relative;
    z-index: 0;
}

.ritual-step-card h4 {
    position: relative;
    z-index: 1;
    margin-bottom: 10px;
    font-size: 1.1rem;
}

.ritual-step-card p {
    font-size: 0.9rem;
    color: var(--secondary-text);
}

.step-tip {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px dashed #eee;
    color: var(--accent-color);
}

.secret-tips-box {
    max-width: 800px;
    margin: 50px auto 0;
    background: #FFFBF0; /* Light yellow bg for tips */
    border: 1px solid #EEDCB8;
    padding: 30px;
    border-radius: var(--border-radius);
}

.secret-tips-box h4 {
    margin-bottom: 20px;
    color: #8A6D3B;
    display: flex;
    align-items: center;
    gap: 10px;
}

.secret-tips-box ul li {
    margin-bottom: 10px;
    padding-left: 20px;
}

/* Footer */
.footer {
    background-color: #33261D;
    color: #E0E0E0;
    padding: 60px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}

.footer h3, .footer h4 {
    color: var(--accent-color);
    margin-bottom: 20px;
}

.brand-col p {
    color: #aaa;
}

.links-col a {
    display: block;
    margin-bottom: 10px;
    color: #ccc;
}

.links-col a:hover {
    color: var(--accent-color);
    padding-left: 5px;
}

.social-icons a {
    display: inline-block;
    margin-right: 15px;
    color: #ccc;
    font-size: 0.9rem;
    border: 1px solid #555;
    padding: 5px 10px;
    border-radius: 4px;
}

.footer-bottom {
    border-top: 1px solid #444;
    padding-top: 20px;
    font-size: 0.8rem;
    color: #777;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    .hero-title {
        font-size: 2.2rem;
    }
    .timeline::before {
        left: 30px;
    }
    .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
    }
    .timeline-item:nth-child(even) {
        left: 0;
    }
    .timeline-item:nth-child(odd), .timeline-item:nth-child(even) {
        text-align: left;
    }
    .timeline-dot {
        left: 22px !important;
        right: auto !important;
    }
    .timeline-date {
        left: auto !important;
        right: 20px !important;
        top: 0;
    }
}
"""

JS_CONTENT = r"""
const translations = {
    tc: {
        pageTitle: "燕窩品牌 - 傳統精美，專業可信",
        brandName: "燕窩品牌",
        navHome: "首頁",
        navAbout: "關於燕窩",
        navProducts: "精選產品",
        navProcess: "傳統工藝",
        navEducation: "燕窩百科",
        navContact: "聯絡我們",
        heroTitle: "傳承千年養生智慧<br>每一盞，皆是天賜珍品",
        heroSubtitle: "純手工挑毛 · 零漂白 · 產地直送",
        ctaExplore: "探索燕窩系列",
        trustNaturalTitle: "100% 純天然",
        trustNaturalDesc: "無化學添加，保留原始營養",
        trustHandmadeTitle: "手工挑毛",
        trustHandmadeDesc: "資深匠人精細挑選，潔淨度高",
        trustCertifiedTitle: "SGS 檢驗合格",
        trustCertifiedDesc: "嚴格把關，食安無憂",
        trustDirectTitle: "產地直送",
        trustDirectDesc: "越南優質產區，新鮮送達",
        aboutTitle: "東方養生珍品",
        aboutSubtitle: "富含表皮生長因子 (EGF) 與優質水溶性蛋白，滋潤養顏，調理體質。",
        aboutContent: "燕窩，自古以來即被視為滋補聖品。我們的每一盞燕窩，皆來自越南純淨燕屋，經過嚴格篩選與傳統手工挑毛工序，確保您品嚐到的每一口，都是大自然的恩賜。",
        productsTitle: "精選燕窩系列",
        badgePremium: "頂級贈禮",
        prodPremiumTitle: "頂級長絲官燕",
        prodPremiumDesc: "絲條完整粗長，口感軟滑帶彈性，發頭極佳。",
        prodPremiumSpec1: "外型：盞型完美",
        prodPremiumSpec2: "口感：軟中帶彈",
        prodPremiumSpec3: "適合：孕期滋補、高端贈禮",
        btnDetails: "查看詳情",
        badgePopular: "熱銷首選",
        prodMixedTitle: "精選混合燕條",
        prodMixedDesc: "外層長絲包裹內芯短纖，口感層次豐富，CP值高。",
        prodMixedSpec1: "外型：條狀不規則",
        prodMixedSpec2: "口感：滑順有嚼勁",
        prodMixedSpec3: "適合：日常保養、家庭享用",
        badgeEconomy: "經濟實惠",
        prodShreddedTitle: "純淨燕碎",
        prodShreddedDesc: "短細纖維，口感綿密柔軟，無需長時間燉煮。",
        prodShreddedSpec1: "外型：細碎狀",
        prodShreddedSpec2: "口感：綿軟易入口",
        prodShreddedSpec3: "適合：長輩小孩、長期調理",
        processTitle: "傳統工藝 匠心製作",
        processStep1Title: "1. 原產地採摘",
        processStep1Desc: "嚴選越南優質燕屋，確保原料純淨。",
        processStep2Title: "2. 專業殺菌",
        processStep2Desc: "現代化設備與標準，確保食品安全。",
        processStep3Title: "3. 手工挑毛",
        processStep3Desc: "熟練師傅精挑細選，去除極細雜質。",
        processStep4Title: "4. 低溫風乾",
        processStep4Desc: "鎖住營養，保留燕窩原始結構。",
        eduTitle: "燉煮五部曲 (The 5-Step Ritual)",
        eduSubtitle: "簡單五步，煥活營養與美味",
        ritualStep1Title: "浸泡 (Soak)",
        ritualStep1Desc: "室溫純水浸泡至膨脹軟透。<br><strong>禁忌熱水。</strong>",
        ritualStep1Tip: "碎燕: 20-30m / 官燕: 45-60m",
        ritualStep2Title: "清理 (Clean)",
        ritualStep2Desc: "撕開燕絲，檢查微細雜物，<br>輕輕漂洗瀝乾。",
        ritualStep3Title: "隔水燉 (Double-Boil)",
        ritualStep3Desc: "放入燉盅，水蓋過燕窩。<br><strong>文火慢燉</strong>，鎖住EGF。",
        ritualStep4Title: "加料 (Infuse)",
        ritualStep4Desc: "起鍋前 5 分鐘加入<br>冰糖、紅棗或枸杞。",
        ritualStep5Title: "享用 (Serve)",
        ritualStep5Desc: "細細品嚐絲滑口感。<br>可冷藏保存 3 天。",
        tipsTitle: "燕窩燉煮三大禁忌",
        tips1: "🚫 <strong>不可用熱水浸泡</strong>：會破壞蛋白質結構，導致口感軟爛。",
        tips2: "🚫 <strong>不可大火煮沸</strong>：激烈翻滾會使燕窩化水。",
        tips3: "🚫 <strong>不可過度清洗</strong>：避免水溶性營養流失，輕漂即可。",
        footerBrandName: "燕窩品牌",
        footerSlogan: "傳承經典，養生首選。",
        footerQuickLinks: "快速連結",
        footerCopyright: "燕窩品牌. All Rights Reserved."
    },
    sc: {
        pageTitle: "燕窝品牌 - 传统精美，专业可信",
        brandName: "燕窝品牌",
        navHome: "首页",
        navAbout: "关于燕窝",
        navProducts: "精选产品",
        navProcess: "传统工艺",
        navEducation: "燕窝百科",
        navContact: "联络我们",
        heroTitle: "传承千年养生智慧<br>每一盏，皆是天赐珍品",
        heroSubtitle: "纯手工挑毛 · 零漂白 · 产地直发",
        ctaExplore: "探索燕窝系列",
        trustNaturalTitle: "100% 纯天然",
        trustNaturalDesc: "无化学添加，保留原始营养",
        trustHandmadeTitle: "手工挑毛",
        trustHandmadeDesc: "资深匠人精细挑选，洁净度高",
        trustCertifiedTitle: "SGS 检验合格",
        trustCertifiedDesc: "严格把关，食安无忧",
        trustDirectTitle: "产地直发",
        trustDirectDesc: "越南优质产区，新鲜送达",
        aboutTitle: "东方养生珍品",
        aboutSubtitle: "富含表皮生长因子 (EGF) 与优质水溶性蛋白，滋润养颜，调理体质。",
        aboutContent: "燕窝，自古以来即被视为滋补圣品。我们的每一盏燕窝，皆来自越南纯净燕屋，经过严格筛选与传统手工挑毛工序，确保您品尝到的每一口，都是大自然的恩赐。",
        productsTitle: "精选燕窝系列",
        badgePremium: "顶级赠礼",
        prodPremiumTitle: "顶级长丝官燕",
        prodPremiumDesc: "丝条完整粗长，口感软滑带弹性，发头极佳。",
        prodPremiumSpec1: "外型：盏型完美",
        prodPremiumSpec2: "口感：软中带弹",
        prodPremiumSpec3: "适合：孕期滋补、高端赠礼",
        btnDetails: "查看详情",
        badgePopular: "热销首选",
        prodMixedTitle: "精选混合燕条",
        prodMixedDesc: "外层长丝包裹内芯短纤，口感层次丰富，CP值高。",
        prodMixedSpec1: "外型：条状不规则",
        prodMixedSpec2: "口感：滑顺有嚼劲",
        prodMixedSpec3: "适合：日常保养、家庭享用",
        badgeEconomy: "经济实惠",
        prodShreddedTitle: "纯净燕碎",
        prodShreddedDesc: "短细纤维，口感绵密柔软，无需长时间炖煮。",
        prodShreddedSpec1: "外型：细碎状",
        prodShreddedSpec2: "口感：绵软易入口",
        prodShreddedSpec3: "适合：长辈小孩、长期调理",
        processTitle: "传统工艺 匠心制作",
        processStep1Title: "1. 原产地采摘",
        processStep1Desc: "严选越南优质燕屋，确保原料纯净。",
        processStep2Title: "2. 专业杀菌",
        processStep2Desc: "现代化设备与标准，确保食品安全。",
        processStep3Title: "3. 手工挑毛",
        processStep3Desc: "熟练师傅精挑细选，去除极细杂质。",
        processStep4Title: "4. 低温风干",
        processStep4Desc: "锁住营养，保留燕窝原始结构。",
        eduTitle: "炖煮五部曲 (The 5-Step Ritual)",
        eduSubtitle: "简单五步，焕活营养与美味",
        ritualStep1Title: "浸泡 (Soak)",
        ritualStep1Desc: "室温纯水浸泡至膨胀软透。<br><strong>禁忌热水。</strong>",
        ritualStep1Tip: "碎燕: 20-30m / 官燕: 45-60m",
        ritualStep2Title: "清理 (Clean)",
        ritualStep2Desc: "撕开燕丝，检查微细杂物，<br>轻轻漂洗沥干。",
        ritualStep3Title: "隔水炖 (Double-Boil)",
        ritualStep3Desc: "放入炖盅，水盖过燕窝。<br><strong>文火慢炖</strong>，锁住EGF。",
        ritualStep4Title: "加料 (Infuse)",
        ritualStep4Desc: "起锅前 5 分钟加入<br>冰糖、红枣或枸杞。",
        ritualStep5Title: "享用 (Serve)",
        ritualStep5Desc: "细细品尝丝滑口感。<br>可冷藏保存 3 天。",
        tipsTitle: "燕窝炖煮三大禁忌",
        tips1: "🚫 <strong>不可用热水浸泡</strong>：会破坏蛋白质结构，导致口感软烂。",
        tips2: "🚫 <strong>不可大火煮沸</strong>：激烈翻滚会使燕窝化水。",
        tips3: "🚫 <strong>不可过度清洗</strong>：避免水溶性营养流失，轻漂即可。",
        footerBrandName: "燕窝品牌",
        footerSlogan: "传承经典，养生首选。",
        footerQuickLinks: "快速链接",
        footerCopyright: "燕窝品牌. All Rights Reserved."
    },
    en: {
        pageTitle: "Bird's Nest Brand - Traditional & Trusted",
        brandName: "Bird's Nest Brand",
        navHome: "Home",
        navAbout: "About Us",
        navProducts: "Products",
        navProcess: "Our Process",
        navEducation: "Education",
        navContact: "Contact",
        heroTitle: "Ancient Nourishment,<br>Exquisite Quality",
        heroSubtitle: "Hand-picked · No Bleaching · Direct from Origin",
        ctaExplore: "Explore Products",
        trustNaturalTitle: "100% Natural",
        trustNaturalDesc: "No chemicals, preserving original nutrients",
        trustHandmadeTitle: "Hand-picked",
        trustHandmadeDesc: "Meticulously cleaned by experts for purity",
        trustCertifiedTitle: "SGS Certified",
        trustCertifiedDesc: "Strict quality control, food safety guaranteed",
        trustDirectTitle: "Direct from Origin",
        trustDirectDesc: "Premium Vietnamese origin, delivered fresh",
        aboutTitle: "Oriental Treasure",
        aboutSubtitle: "Rich in EGF and water-soluble proteins for beauty and health.",
        aboutContent: "Bird's nest has been revered as a supreme tonic for centuries. Every nest comes from our pure Vietnamese bird houses, strictly selected and hand-cleaned, ensuring every bite is a gift from nature.",
        productsTitle: "Featured Products",
        badgePremium: "Premium Gift",
        prodPremiumTitle: "Premium Long-Strand",
        prodPremiumDesc: "Complete long strands, soft yet resilient texture, excellent expansion.",
        prodPremiumSpec1: "Shape: Perfect Cup",
        prodPremiumSpec2: "Texture: Soft & Chewy",
        prodPremiumSpec3: "Best for: Pregnancy, Premium Gifting",
        btnDetails: "Details",
        badgePopular: "Best Seller",
        prodMixedTitle: "Selected Mix",
        prodMixedDesc: "Long strands wrapping short fibers. Rich texture and high value.",
        prodMixedSpec1: "Shape: Irregular Strips",
        prodMixedSpec2: "Texture: Smooth & Firm",
        prodMixedSpec3: "Best for: Daily Care, Family",
        badgeEconomy: "Economy",
        prodShreddedTitle: "Pure Shredded",
        prodShreddedDesc: "Fine fibers, soft texture, easy to cook and digest.",
        prodShreddedSpec1: "Shape: Fine Shreds",
        prodShreddedSpec2: "Texture: Soft & Mellow",
        prodShreddedSpec3: "Best for: Elderly/Kids, Long-term Care",
        processTitle: "Traditional Craftsmanship",
        processStep1Title: "1. Harvesting",
        processStep1Desc: "Sourcing from premium Vietnamese bird houses.",
        processStep2Title: "2. Sterilization",
        processStep2Desc: "Modern equipment ensuring food safety.",
        processStep3Title: "3. Hand-Picking",
        processStep3Desc: "Skilled artisans remove fine impurities.",
        processStep4Title: "4. Low-Temp Drying",
        processStep4Desc: "Preserving nutrients and structure.",
        eduTitle: "The 5-Step Ritual",
        eduSubtitle: "Simple steps to unlock nutrition and taste",
        ritualStep1Title: "Soak",
        ritualStep1Desc: "Soak in room temp water until expanded.<br><strong>NO HOT WATER.</strong>",
        ritualStep1Tip: "Shreds: 20-30m / Premium: 45-60m",
        ritualStep2Title: "Clean",
        ritualStep2Desc: "Tear gently, check for impurities,<br>rinse lightly.",
        ritualStep3Title: "Double-Boil",
        ritualStep3Desc: "Place in bowl, cover with water.<br><strong>Simmer gently</strong> to keep EGF.",
        ritualStep4Title: "Infuse",
        ritualStep4Desc: "Add rock sugar, dates, or goji berries<br>5 mins before done.",
        ritualStep5Title: "Serve",
        ritualStep5Desc: "Enjoy the silky texture.<br>Keep refrigerated for up to 3 days.",
        tipsTitle: "3 Golden Rules",
        tips1: "🚫 <strong>No Hot Water Soak</strong>: Destroys proteins and texture.",
        tips2: "🚫 <strong>No Boiling</strong>: Violent boiling dissolves the nest.",
        tips3: "🚫 <strong>No Over-washing</strong>: Preserves water-soluble nutrients.",
        footerBrandName: "Bird's Nest Brand",
        footerSlogan: "Inheriting tradition, your health choice.",
        footerQuickLinks: "Quick Links",
        footerCopyright: "Bird's Nest Brand. All Rights Reserved."
    },
    vn: {
        pageTitle: "Thương hiệu Yến Sào - Truyền thống & Tin cậy",
        brandName: "Thương hiệu Yến Sào",
        navHome: "Trang chủ",
        navAbout: "Giới thiệu",
        navProducts: "Sản phẩm",
        navProcess: "Quy trình",
        navEducation: "Kiến thức",
        navContact: "Liên hệ",
        heroTitle: "Tinh hoa dưỡng sinh ngàn năm<br>Món quà quý giá từ thiên nhiên",
        heroSubtitle: "Nhặt lông thủ công · Không tẩy trắng · Từ gốc Việt Nam",
        ctaExplore: "Khám phá Sản phẩm",
        trustNaturalTitle: "100% Tự nhiên",
        trustNaturalDesc: "Không hóa chất, giữ trọn dưỡng chất",
        trustHandmadeTitle: "Nhặt lông thủ công",
        trustHandmadeDesc: "Được làm sạch tỉ mỉ bởi nghệ nhân",
        trustCertifiedTitle: "Chứng nhận SGS",
        trustCertifiedDesc: "Kiểm soát nghiêm ngặt, an toàn thực phẩm",
        trustDirectTitle: "Nguồn gốc rõ ràng",
        trustDirectDesc: "Vùng nuôi yến Việt Nam chất lượng cao",
        aboutTitle: "Báu Vật Phương Đông",
        aboutSubtitle: "Giàu EGF và protein hòa tan, dưỡng nhan và bồi bổ sức khỏe.",
        aboutContent: "Yến sào từ lâu đã được coi là thượng phẩm. Mỗi tổ yến của chúng tôi đều đến từ nhà yến sạch tại Việt Nam, trải qua quá trình chọn lọc và làm sạch thủ công nghiêm ngặt.",
        productsTitle: "Sản phẩm Nổi bật",
        badgePremium: "Quà tặng Cao cấp",
        prodPremiumTitle: "Yến Quan Thượng Hạng",
        prodPremiumDesc: "Sợi dài nguyên vẹn, mềm dẻo, độ nở tuyệt vời.",
        prodPremiumSpec1: "Hình dáng: Tai yến hoàn hảo",
        prodPremiumSpec2: "Hương vị: Mềm và dai",
        prodPremiumSpec3: "Phù hợp: Mẹ bầu, Biếu tặng",
        btnDetails: "Chi tiết",
        badgePopular: "Bán chạy nhất",
        prodMixedTitle: "Yến Tinh Chế Chọn Lọc",
        prodMixedDesc: "Sợi dài bao bọc sợi ngắn. Hương vị phong phú và giá trị cao.",
        prodMixedSpec1: "Hình dáng: Dạng thanh",
        prodMixedSpec2: "Hương vị: Mịn và chắc",
        prodMixedSpec3: "Phù hợp: Dùng hàng ngày, Gia đình",
        badgeEconomy: "Tiết kiệm",
        prodShreddedTitle: "Yến Vụn Tinh Khiết",
        prodShreddedDesc: "Sợi nhỏ, mềm mịn, dễ nấu và dễ tiêu hóa.",
        prodShreddedSpec1: "Hình dáng: Vụn nhỏ",
        prodShreddedSpec2: "Hương vị: Mềm mại",
        prodShreddedSpec3: "Phù hợp: Người già/Trẻ em",
        processTitle: "Quy Trình Truyền Thống",
        processStep1Title: "1. Thu Hoạch",
        processStep1Desc: "Tuyển chọn từ nhà yến Việt Nam chất lượng.",
        processStep2Title: "2. Tiệt Trùng",
        processStep2Desc: "Thiết bị hiện đại đảm bảo vệ sinh.",
        processStep3Title: "3. Nhặt Lông",
        processStep3Desc: "Thợ lành nghề loại bỏ tạp chất nhỏ nhất.",
        processStep4Title: "4. Sấy Lạnh",
        processStep4Desc: "Giữ trọn dinh dưỡng và cấu trúc yến.",
        eduTitle: "Nghi Thức Chưng Yến",
        eduSubtitle: "5 bước đơn giản để đánh thức hương vị",
        ritualStep1Title: "Ngâm (Soak)",
        ritualStep1Desc: "Ngâm nước thường đến khi nở đều.<br><strong>KHÔNG DÙNG NƯỚC NÓNG.</strong>",
        ritualStep1Tip: "Vụn: 20-30p / Thượng hạng: 45-60p",
        ritualStep2Title: "Làm Sạch (Clean)",
        ritualStep2Desc: "Xé sợi, kiểm tra tạp chất,<br>rửa nhẹ nhàng.",
        ritualStep3Title: "Chưng (Double-Boil)",
        ritualStep3Desc: "Cho vào thố, đổ ngập nước.<br><strong>Chưng lửa nhỏ</strong> giữ EGF.",
        ritualStep4Title: "Thêm Vị (Infuse)",
        ritualStep4Desc: "Thêm đường phèn, táo đỏ<br>5 phút trước khi tắt bếp.",
        ritualStep5Title: "Thưởng Thức (Serve)",
        ritualStep5Desc: "Cảm nhận vị mềm mượt.<br>Bảo quản lạnh được 3 ngày.",
        tipsTitle: "3 Điều Cấm Kỵ",
        tips1: "🚫 <strong>Không ngâm nước nóng</strong>: Phá vỡ cấu trúc protein.",
        tips2: "🚫 <strong>Không đun sôi mạnh</strong>: Yến sẽ bị tan trong nước.",
        tips3: "🚫 <strong>Không rửa quá kỹ</strong>: Tránh mất chất dinh dưỡng.",
        footerBrandName: "Thương hiệu Yến Sào",
        footerSlogan: "Kế thừa truyền thống, lựa chọn cho sức khỏe.",
        footerQuickLinks: "Liên kết nhanh",
        footerCopyright: "Thương hiệu Yến Sào. All Rights Reserved."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('Bird\'s Nest Website Loaded');

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Simple Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Language Switcher Logic
    const langBtns = document.querySelectorAll('.lang-switch span');
    
    function setLanguage(lang) {
        // Update Content
        const data = translations[lang];
        if (!data) return;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (data[key]) {
                element.innerHTML = data[key]; // Using innerHTML to support <br> tags
            }
        });

        // Update Active Button
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Initialize (Default TC)
    setLanguage('tc');
});
"""

def create_directory(path):
    if not os.path.exists(path):
        os.makedirs(path)
        print(f"Created directory: {path}")

def create_file(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Created file: {path}")

def copy_image(src, dst):
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied image: {src} -> {dst}")
    else:
        print(f"Warning: Source image not found: {src}")

def main():
    base_dir = r"f:\ZeRo總項目清單 15-10-2024\(生意) - 越南\(生意) - 燕窩\result"
    data_dir = r"f:\ZeRo總項目清單 15-10-2024\(生意) - 越南\(生意) - 燕窩\Data"
    
    # Ensure directories exist
    create_directory(os.path.join(base_dir, "css"))
    create_directory(os.path.join(base_dir, "js"))
    create_directory(os.path.join(base_dir, "images"))

    # Write files
    create_file(os.path.join(base_dir, "index.html"), HTML_CONTENT)
    create_file(os.path.join(base_dir, "css/style.css"), CSS_CONTENT)
    create_file(os.path.join(base_dir, "js/main.js"), JS_CONTENT)
    
    # Copy Images
    # Mapping based on available files in Data dir
    # photo_2026-02-10_10-14-41.jpg (131KB) -> Hero fallback
    # photo_2026-02-10_10-14-53.jpg (214KB) -> Premium Product
    # photo_2026-02-10_10-14-56.jpg (164KB) -> Mixed Product
    # photo_2026-02-10_10-15-00.jpg (219KB) -> Shredded Product
    
    img_map = {
        "photo_2026-02-10_10-14-41.jpg": "hero-fallback.jpg",
        "photo_2026-02-10_10-14-53.jpg": "product-premium.jpg",
        "photo_2026-02-10_10-14-56.jpg": "product-mixed.jpg",
        "photo_2026-02-10_10-15-00.jpg": "product-shredded.jpg"
    }
    
    for src_name, dst_name in img_map.items():
        src_path = os.path.join(data_dir, src_name)
        dst_path = os.path.join(base_dir, "images", dst_name)
        copy_image(src_path, dst_path)

    print("Website generation and asset copy complete.")

if __name__ == "__main__":
    main()
