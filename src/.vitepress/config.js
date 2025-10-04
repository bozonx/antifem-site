import path from "node:path";
import { defineConfig } from "vitepress";
import { mergeSiteConfig } from "vitepress-sls-blog-tmpl/siteConfigBase.js";
import { loadSiteLocale } from "vitepress-sls-blog-tmpl/siteConfigHelper.js";

export default async () => {
  const config = defineConfig({
    srcDir: path.resolve(__dirname, "../"),
    siteUrl: "https://antifem.org",
    repo: "https://github.com/bozonx/antifem-site",
    themeConfig: {
      logo: "/img/logo.svg",

      // specific for this site
      blogUrl: "https://blog.antifem.org",

      search: { provider: "pagefind" },
    },
    head: [
      // do not recognize telephone numbers on the page
      ["meta", { name: "format-detection", content: "telephone=no" }],

      [
        "script",
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-FLELNEC80R",
        },
      ],
      [
        "script",
        {},
        `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
       gtag('config', 'G-FLELNEC80R');`,
      ],

      // pagefind
      ["link", { rel: "stylesheet", href: "/pagefind/pagefind-ui.css" }],
      ["script", { src: "/pagefind/pagefind-ui.js" }],
    ],
  });

  return mergeSiteConfig({
    ...config,
    locales: {
      en: await loadSiteLocale("en", config),
      ru: await loadSiteLocale("ru", config),
    },
  });
};
