<template>
  <header class="py-2 border-b">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-start sm:items-center">
        <NuxtImg
          class="w-8 sm:w-12"
          src="/icon-green.png"
          format="webp"
          alt="Nuxtcipes Logo"
        />
        <span class="text-xl sm:text-3xl font-bold">Nuxtcipes</span>
      </NuxtLink>
      <ul
        class="flex gap-3 sm:gap-6 ml-auto text-base sm:text-xl font-bold capitalize"
      >
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
