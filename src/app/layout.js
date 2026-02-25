import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-serif"
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata = {
  metadataBase: new URL("https://vnbirdnest.com"),
  title: "頂級越南燕窩 | Premium Vietnam Bird's Nest",
  description:
    "純手工挑毛 · 零化學漂白 · 原產地直送。Premium Vietnam bird's nest direct from origin.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Vietnam Birdnest | Premium Origin",
    description:
      "Traditional handcrafted bird's nest, direct from Vietnam origin with strict quality standards.",
    url: "https://vnbirdnest.com",
    siteName: "Vietnam Birdnest",
    locale: "zh_HK",
    type: "website",
    images: [
      {
        url: "/assets/IMG_2779.JPG",
        width: 1200,
        height: 630,
        alt: "Premium Vietnam Birdnest"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vietnam Birdnest | Premium Origin",
    description: "Handcrafted, bleach-free bird's nest direct from Vietnam origin.",
    images: ["/assets/IMG_2779.JPG"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant" className={`${bodoni.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
