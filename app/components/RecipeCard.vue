<script setup lang="ts">
import { type Recipe } from "../../types/types";
defineProps<{
  recipe: Recipe;
}>();
</script>

<template>
  <div class="flex flex-col shadow rounded-md">
    <NuxtImg
      :src="recipe.image"
      sizes="xs:100vw sm:667px md:400px"
      densities="x1"
      format="webp"
      :alt="recipe.name"
      class="rounded-t-md"
    />
    <div class="flex flex-col py-6 px-4 flex-1">
      <p class="text-xl lg:text-2xl font-semibold mb-2">
        {{ recipe.name }}
      </p>
      <div
        class="font-normal w-full bg-zinc-300 dark:bg-zinc-700 flex gap-8 text-lg lg:text-xl mb-4 mt-auto p-2 rounded-md"
      >
        <div class="flex items-center gap-1">
          <Icon
            name="mdi:clock-time-eight-outline"
            class="text-dodgeroll-gold"
          />
          <span>{{ recipe.cookTimeMinutes }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:fire" class="text-dodgeroll-gold" />
          <span>{{ recipe.caloriesPerServing }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:star" class="text-dodgeroll-gold" />
          <span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
        </div>
      </div>
      <BaseBtn :to="`/recipes/${recipe.id}`" label="View" />
    </div>
  </div>
</template>
