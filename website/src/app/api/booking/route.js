import { NextResponse } from "next/server";

const WINDOW_MS = 60 * 1000;
const LIMIT_PER_WINDOW = 5;
const MIN_FORM_FILL_MS = 2500;
const MAX_MESSAGE_LENGTH = 1200;
const PRODUCT_IDS = new Set(["premium", "gift", "family", "canned"]);

const bucket = globalThis.__bookingRateLimit ?? new Map();
globalThis.__bookingRateLimit = bucket;

function takeClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const log = bucket.get(ip) ?? [];
  const active = log.filter((ts) => now - ts <= WINDOW_MS);

  if (active.length >= LIMIT_PER_WINDOW) {
    bucket.set(ip, active);
    return true;
  }

  active.push(now);
  bucket.set(ip, active);
  return false;
}

function validatePayload(payload) {
  const name = String(payload?.name ?? "").trim();
  const phone = String(payload?.phone ?? "").trim();
  const product = String(payload?.product ?? "").trim();
  const message = String(payload?.message ?? "").trim();
  const website = String(payload?.website ?? "").trim();
  const startedAt = Number(payload?.startedAt ?? 0);

  if (website) {
    return { ok: false, code: "spam" };
  }

  if (!name || name.length < 2 || name.length > 80) {
    return { ok: false, code: "invalid_name" };
  }

  if (!phone || phone.length < 6 || phone.length > 30) {
    return { ok: false, code: "invalid_phone" };
  }

  if (!PRODUCT_IDS.has(product)) {
    return { ok: false, code: "invalid_product" };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return { ok: false, code: "invalid_message" };
  }

  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FORM_FILL_MS) {
    return { ok: false, code: "too_fast" };
  }

  return {
    ok: true,
    data: {
      name,
      phone,
      product,
      message
    }
  };
}

export async function POST(request) {
  const ip = takeClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, code: "rate_limited" }, { status: 429 });
  }

  let payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, code: "invalid_json" }, { status: 400 });
  }

  const validated = validatePayload(payload);

  if (!validated.ok) {
    return NextResponse.json({ ok: false, code: validated.code }, { status: 400 });
  }

  console.info("[booking] new inquiry", {
    ...validated.data,
    ip,
    timestamp: new Date().toISOString()
  });

  return NextResponse.json({ ok: true });
}
