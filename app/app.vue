<script setup lang="ts">
useSeoMeta({
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-image-preview:large",
  author: "Farhan Madni",
  ogLocale: "en_US",
  ogType: "website",
  mobileWebAppCapable: "yes",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppTitle: "NuxtCipes",
  appleMobileWebAppStatusBarStyle: "black-translucent",
});
useHead({
  htmlAttrs: {
    lang: "en",
  },
  titleTemplate: "%s - NuxtCipes",
  link: [{ rel: "canonical", href: "https://recipes-347.vercel.app" }],
});
</script>

<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
