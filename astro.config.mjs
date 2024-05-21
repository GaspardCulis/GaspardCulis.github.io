import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://gaspardculis.github.io",
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
