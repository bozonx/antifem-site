---
editLink: false
lastUpdated: false
prev: false
next: false
layout: page
---

<script setup>
import SiteHome from "vitepress-sls-blog-tmpl/src/SiteHome.vue";

const hero = {
  name: "Antifeminism",
  text: "text",
  tagline: "antifem",
  // image:
  //   src: /logo.png
  //   alt: VitePress
  actions: [
    {
      theme: "brand",
      text: "Project description",
      link: "/en/doc/",
    },
    {
      theme: "alt",
      text: "Support us",
      link: "/en/page/donate",
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
    icon: "🛠️",
    title: "Антифем это равноправие",
    details: "За что выступает движение антифеминизм",
    link: "/ru/doc/what-the-antifeminism-movement-stands-for",
    linkText: "Читать о",
  },
  {
    title: "The Truth about Modern Feminism",
    details: "описание",
    link: "/ru/doc/the-truth-about-modern-feminism",
    linkText: "Читать о",
  },
  {
    // #icon:
    // #  src: /cool-feature-icon.svg
    // #  width
    // #  height
    // #  alt
    title: "How to Defeat Feminism",
    details: "описание",
    linkText: "Читать о",
    link: "/ru/doc/how-to-defeat-feminism",
  },
]
</script>

<SiteHome :hero="hero" :features="features">

</SiteHome>
