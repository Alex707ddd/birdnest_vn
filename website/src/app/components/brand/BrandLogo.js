export default function BrandLogo({ label, size = "nav" }) {
  const logoClass = size === "footer" ? "footer-logo" : "navbar-logo";

  return (
    <div className="brand-logo-container">
      <img src="/assets/brand/hanquan-logo.jpg" alt="漢泉燕窩 logo" className={logoClass} />
      <div className="brand-text-stack">
        <span className="brand-primary">{label}</span>
      </div>
    </div>
  );
}
