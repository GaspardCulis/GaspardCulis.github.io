import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";

import { i18n } from "astro-i18n-aut/integration";
import tailwind from "@astrojs/tailwind";

const defaultLocale = "en";
const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  es: "es-ES",
  fr: "fr-CA",
};

// https://astro.build/config
export default defineConfig({
  site: "https://www.gasdev.fr",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    tailwind(),
    i18n({
      locales,
      defaultLocale,
      exclude: [
        "pages/robots.txt.ts"
      ]
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
