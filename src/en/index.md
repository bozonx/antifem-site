---
layout: page
---

<script setup>
import { useData } from "vitepress";
import SiteHome from "vitepress-sls-blog-tmpl/SiteHome.vue";

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
      text: "Project description",
      link: `/${localeIndex.value}/${theme.value.docUrl}/`,
    },
    {
      theme: "alt",
      text: "Support us",
      link: `/${localeIndex.value}/${theme.value.docUrl}/`,
    },
    {
      theme: "alt",
      text: "Our telegram channel",
      link: "https://t.me/antifem_battle",
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
