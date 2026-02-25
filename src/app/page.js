"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import BookingForm from "./components/BookingForm";
import HeroVideo from "./components/HeroVideo";
import Navbar from "./components/Navbar";
import NutritionalGuide from "./components/NutritionalGuide";
import ProductGallery from "./components/ProductGallery";
import SiteFooter from "./components/SiteFooter";
import TraditionalCraft from "./components/TraditionalCraft";
import TrustBadges from "./components/TrustBadges";
import WhatsAppFab from "./components/WhatsAppFab";
import { I18nProvider, useI18n } from "./hooks/useI18n";

function HomeContent() {
  const { lang, setLang, t, languages, products } = useI18n();

  const { scrollYProgress } = useScroll();
  const blobAX = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const blobBX = useTransform(scrollYProgress, [0, 1], [0, -130]);

  return (
    <main>
      <motion.div className="blob blob-a" style={{ x: blobAX }} />
      <motion.div className="blob blob-b" style={{ x: blobBX }} />
      <motion.div className="blob blob-c" style={{ x: blobAX }} />

      <Navbar
        lang={lang}
        onLangChange={setLang}
        labels={t.nav}
        languages={languages}
      />

      <HeroVideo content={t.hero} />
      <TrustBadges section={t.trust} />
      <TraditionalCraft section={t.craft} />
      <ProductGallery section={t.collection} products={products} />
      <NutritionalGuide section={t.process} />
      <BookingForm section={t.booking} products={products} />
      <SiteFooter section={t.footer} />
      <WhatsAppFab />
    </main>
  );
}

export default function HomePage() {
  return (
    <I18nProvider>
      <HomeContent />
    </I18nProvider>
  );
}
