import { defineRouting } from "next-intl/routing";

// Single source of truth for the supported locales. Keep this list in sync with
// src/i18n/request.ts, src/components/language-switcher.tsx and src/locales/*.json.
export const locales = ["en", "es", "pt", "de"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
