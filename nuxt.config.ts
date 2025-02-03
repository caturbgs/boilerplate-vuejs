// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/image", "@vueuse/nuxt", "@nuxt/fonts"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  // Setup Google Fonts
  fonts: {
    defaults: {
      weights: [200, 300, 400, 500, 600, 700, 800, 900],
      styles: ["normal", "italic"],
    },
    families: [{ name: "Montserrat", provider: "google" }],
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Boilerplate NuxtJS 3",
      meta: [
        { name: "description", content: "Boilerplate NuxtJS 3" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Boilerplate NuxtJS 3" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", href: "/favicon-16x16.png", sizes: "16x16" },
        { rel: "icon", type: "image/png", href: "/favicon-32x32.png", sizes: "32x32" },
        { rel: "icon", type: "image/png", href: "/android-chrome-192x192.png", sizes: "192x192" },
        { rel: "icon", type: "image/png", href: "/android-chrome-512x512.png", sizes: "512x512" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    },
  },
});
