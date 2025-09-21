import { defineConfig } from "vitepress";
import { mergeSiteConfig } from "vitepress-sls-blog-tmpl/siteConfigBase.js";
import { loadSiteLocale } from "vitepress-sls-blog-tmpl/siteConfigHelper.js";

export const PER_PAGE = 20;

export default async () => {
  const config = defineConfig({
    hostname: "https://antifem.org",
    themeConfig: {
      repo: "https://github.com/bozonx/antifem-site",
      blogUrl: "https://blog.antifem.org",
      logo: "/img/logo.svg",
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
    ],
  });

  return mergeSiteConfig({
    ...config,
    locales: {
      en: await loadSiteLocale("en", __filename, config),
      ru: await loadSiteLocale("ru", __filename, config),
    },
  });
};
