import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  i18n: {
    locales: ["fr", "en", "es"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: false
    }
  },
  site: "https://n0b0k.github.io",
  integrations: [tailwind()],
  adapter: cloudflare()
});