---
layout: home
---

<script setup>
import { useData } from "vitepress";
import SiteHome from "vitepress-sls-blog-tmpl/SiteHome.vue";

const { theme, localeIndex } = useData();

const hero = {
  name: "Движение Антифеминизм",
  text: "Мы боремся за истинное гендерное равноправие",
  tagline: "Чтобы мужчины имели не меньше прав чем женщины нужно устранить источник неравноправия - феминизм",
  image: {
    alt: "Antifem logo",
  },
// actions: [
// {
// theme: "brand",
// text: `📃 О проекте`,
// link: `/${localeIndex.value}/doc/about`,
// },
// {
// theme: "alt",
// text: `🗞️ Новости, статьи, события`,
// link: `${theme.value.blogUrl}/${localeIndex.value}/recent/1`,
// },
// {
// theme: "alt",
// text: `📢 Мы в соц сетях`,
// link: `/${localeIndex.value}/${theme.value.linksUrl}`,
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
// title: "Правда о современном феминизме",
// details: "описание",
// linkText: "Читать о",
// link: "/ru/doc/the-truth-about-modern-feminism",
// },
// {
// icon: "⚔️",
// title: "Как победить феминизм",
// details: "описание",
// linkText: "Читать о",
// link: "/ru/doc/how-to-defeat-feminism",
// },
]
</script>

<SiteHome :hero="hero" :features="features">
</SiteHome>
