---
layout: page
---

<script setup>
import { useData } from "vitepress";
import SiteHome from "vitepress-sls-blog-tmpl/SiteHome.vue";
import { PROPS } from "../.vitepress/props.js";

const { theme, localeIndex } = useData();

const hero = {
  name: "Antifeminism",
  text: "text",
  tagline: "antifem",
  image: {
    src: theme.value.mainHeroImg,
    alt: "Antifem logo",
  },
  actions: [
    {
      theme: "brand",
      text: `📃 About the project`,
      link: `/${localeIndex.value}/doc/about`,
    },
    {
      theme: "alt",
      text: `🗞️ News, articles, events`,
      link: `${PROPS.blogUrl}/${localeIndex.value}/recent/1`,
    },
    {
      theme: "alt",
      text: `📢 We in social media`,
      link: `/${localeIndex.value}/${theme.value.linksUrl}`,
    },
  ],
}
const features = [
  {
    icon: "🤝",
    title: "Антифем это равноправие",
    details: "За что выступает движение антифеминизм",
    linkText: "Читать о",
    link: "/ru/doc/what-the-antifeminism-movement-stands-for",
  },
  {
    icon: "📖",
    title: "The Truth about Modern Feminism",
    details: "описание",
    linkText: "Читать о",
    link: "/ru/doc/the-truth-about-modern-feminism",
  },
  {
    icon: "⚔️",
    title: "How to Defeat Feminism",
    details: "описание",
    linkText: "Читать о",
    link: "/ru/doc/how-to-defeat-feminism",
  },
]
</script>

<SiteHome :hero="hero" :features="features">
</SiteHome>
