---
editLink: false
lastUpdated: false
prev: false
next: false
layout: page
---

<script setup>
import { useData } from "vitepress";
import SiteHome from "vitepress-sls-blog-tmpl/src/SiteHome.vue";

const { theme } = useData();

const hero = {
  name: "Антифеминизм",
  text: "text",
  tagline: "antifem",
  image: {
    src: "/img/site-big-logo.webp",
    alt: "Antifem logo",
  },
  actions: [
    {
      theme: "brand",
      text: "Описание проекта",
      link: "/ru/doc/",
    },
    {
      theme: "alt",
      text: "Поддержать проект",
      link: "/ru/page/donate",
    },
    {
      theme: "alt",
      text: "Наш Telegram канал",
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
    title: "Правда о современном феминизме",
    details: "описание",
    linkText: "Читать о",
    link: "/ru/doc/the-truth-about-modern-feminism",
  },
  {
    icon: "⚔️",
    title: "Как победить феминизм",
    details: "описание",
    linkText: "Читать о",
    link: "/ru/doc/how-to-defeat-feminism",
  },
]
</script>

<SiteHome :hero="hero" :features="features">
</SiteHome>
