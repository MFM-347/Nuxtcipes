import { defineSitemapEventHandler } from "#imports";
import { type RecipeResponse } from "~~/types/types";
import type { SitemapUrlInput } from "#sitemap/types";

export default defineSitemapEventHandler(async () => {
  const res: RecipeResponse = await $fetch(
    "https://dummyjson.com/recipes?limit=12",
  );
  const sitemapUrl: SitemapUrlInput[] = res.recipes.map((item: any) => ({
    loc: `/recipes/${item.id}`,
  }));
});
