import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://astro-tutorial-build-a-blog.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>ex-mx</language>`,
  });
}
