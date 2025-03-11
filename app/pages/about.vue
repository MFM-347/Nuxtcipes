<script setup lang="ts">
useSeoMeta({
  title: "About",
  description: "Learn about nuxtcipes",
  ogTitle: "About - Nuxtcipes",
  ogDescription: "Recipes for you to cook!",
  ogImage: "/nuxt-course-hero.png",
  ogUrl: `https://recipes-347.vercel.app`,
  twitterTitle: "About - Nuxtcipes",
  twitterDescription: "Learn about nuxtcipes",
  twitterImage: "/nuxt-course-hero.png",
  twitterCard: "summary",
});
</script>

<template>
  <main>
    <section class="container py-20">
      <h1 class="text-6xl font-extrabold mb-6 text-balance">
        About Nuxtcipes
        <span
          class="align-super text-sm p-2 bg-apple-green dark:bg-apple-green/80"
          >Tutorial Proj</span
        >
      </h1>
      <p class="text-xl mb-6 text-balance max-w-screen-lg">
        Nuxtcipes is a recipe application based on the dummyJSON API, created by
        <a href="https://github.com/MFM-347" class="underline">MFM-347</a> with
        John Komarnicki's tutorial
        <a href="https://youtu.be/RAJZOqr3JZU" class="underline">here</a> with
        some UI and responsiveness improvements.
      </p>
    </section>
  </main>
</template>
