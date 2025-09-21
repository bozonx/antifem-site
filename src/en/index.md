---
layout: home
---

<script setup>
import { useData } from "vitepress";
import SiteHome from "vitepress-sls-blog-tmpl/SiteHome.vue";

const { theme, localeIndex } = useData();

const hero = {
  name: "Antifeminism movement",
  text: "We are fighting for true gender equality",
  tagline: "In order for men to have no less rights than women, it is necessary to eliminate the source of inequality - feminism",
  image: {
    alt: "Antifem logo",
  },
// actions: [
// {
// theme: "brand",
// text: `📃 About the project`,
// link: `/${localeIndex.value}/doc/about`,
// },
// {
// theme: "alt",
// text: `🗞️ News, articles, events`,
// link: `${theme.value.blogUrl}/${localeIndex.value}/recent/1`,
// },
// {
// theme: "alt",
// text: `📢 We in social media`,
// link: `/${localeIndex.value}/page/links`,
// },
// ],
}
const features = [
// {
// icon: "🤝",
// title: "Антифем это равноправие",
// details: "За что выступает движение антифеминизм",
// linkText: "Читать о",
// link: "/ru/doc/what-the-antifeminism-movement-stands-for",
// },
// {
// icon: "📖",
// title: "The Truth about Modern Feminism",
// details: "описание",
// linkText: "Читать о",
// link: "/ru/doc/the-truth-about-modern-feminism",
// },
// {
// icon: "⚔️",
// title: "How to Defeat Feminism",
// details: "описание",
// linkText: "Читать о",
// link: "/ru/doc/how-to-defeat-feminism",
// },
]
</script>

<SiteHome :hero="hero" :features="features">
</SiteHome>
