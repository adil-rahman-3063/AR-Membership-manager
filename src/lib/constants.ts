export const WHATSAPP_NUMBER = "919207114070";
export const DEFAULT_DEMO_MESSAGE = "Hi Adil, I would like a free demo of your membership app";
export const WHATSAPP_DEMO_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_DEMO_MESSAGE)}`;

export function getWhatsAppPlanUrl(planName: string) {
  const text = `Hi Adil, I would like a free demo of your membership app (${planName}).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
