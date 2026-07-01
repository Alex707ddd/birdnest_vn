"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { createWhatsAppUrl } from "../lib/contact";

export default function BookingForm({ section, products }) {
  const [website, setWebsite] = useState("");

  const initialProduct = useMemo(() => products[0]?.id ?? "premium", [products]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (website) {
      return;
    }

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const productId = String(form.get("product") ?? initialProduct);
    const message = String(form.get("message") ?? "").trim();
    const productName = section.options?.[productId] ?? productId;

    const text = [
      `您好，我是 ${name}。`,
      `聯絡電話：${phone}`,
      `想詢問產品：${productName}`,
      `留言：${message || "（無）"}`
    ].join("\n");

    const url = createWhatsAppUrl(text);

    event.currentTarget.reset();
    window.location.assign(url);
  };

  return (
    <section id="booking" className="section booking">
      <motion.div
        className="booking-shell liquid-panel"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
      >
        <h2>{section.title}</h2>
        <p>{section.subtitle}</p>

        <form onSubmit={handleSubmit}>
          <label>
            {section.fields.name}
            <input
              name="name"
              type="text"
              placeholder={section.placeholders.name}
              autoComplete="name"
              required
            />
          </label>

          <label>
            {section.fields.phone}
            <input
              name="phone"
              type="tel"
              placeholder={section.placeholders.phone}
              autoComplete="tel"
              required
            />
          </label>

          <label>
            {section.fields.product}
            <select name="product" defaultValue={initialProduct}>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {section.options[product.id]}
                </option>
              ))}
            </select>
          </label>

          <label>
            {section.fields.message}
            <textarea
              name="message"
              rows={4}
              placeholder={section.placeholders.message}
            />
          </label>

          <input
            className="honeypot"
            type="text"
            name="website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
          />

          <button type="submit" className="gold-btn full">
            {section.fields.submit}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
