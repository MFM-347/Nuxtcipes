import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ["/"],
    },
  },
  css: ["@/app.css"],
  site: {
    url: "https://recipes-347.vercel.app",
    name: "Nuxtcipes",
  },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },
  image: {
    domains: ["https://cdn.dummyjson.com"],
  },
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxt/image", "@nuxtjs/sitemap"],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
  features: {
    inlineStyles: true,
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  experimental: {
    viewTransition: true,
    renderJsonPayloads: true,
  },
});
