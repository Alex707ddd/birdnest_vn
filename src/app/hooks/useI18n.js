"use client";

import { createContext, useContext, useMemo, useState } from "react";
import {
  DEFAULT_LANGUAGE,
  languages,
  productMedia,
  translations
} from "../lib/i18n";

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANGUAGE);
  const t = useMemo(() => translations[lang] ?? translations[DEFAULT_LANGUAGE], [lang]);

  const products = useMemo(
    () =>
      productMedia.map((item) => ({
        ...item,
        ...t.collection.products[item.id],
        badge: item.badgeKey ? t.collection.badges[item.badgeKey] : null
      })),
    [t]
  );

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
      languages,
      products
    }),
    [lang, t, products]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
