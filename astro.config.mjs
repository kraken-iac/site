import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'http://kraken-iac.eoinfennessy.com',
  integrations: [icon()]
});