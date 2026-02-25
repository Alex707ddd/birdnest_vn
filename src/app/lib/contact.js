export const WHATSAPP_NUMBER = "85212345678";

export function createWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
