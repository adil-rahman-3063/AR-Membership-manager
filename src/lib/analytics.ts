declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set" | "js",
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export function trackLead(source: string, details?: Record<string, any>) {
  trackEvent("generate_lead", {
    event_category: "lead",
    event_label: source,
    ...details,
  });
}
