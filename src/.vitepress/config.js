import siteConfigBase from "vitepress-sls-blog-tmpl/src/configs/siteConfigBase.js";
import { loadLocale } from "vitepress-sls-blog-tmpl/src/helpers/parseTranslations.js";

const PROPS = {
  hostname: "https://antifem-move.org",
  repo: "https://github.com/bozonx/antifem-site",
  editLinkPattern: "https://github.com/bozonx/antifem-site/edit/main/src/:path",
  blogUrl: "https://blog.antifem-move.org",
  footerCopyright: "Copyright © 2024-present Antifem movement.",
  donateUrl: "page/donate",
  aboutUrl: "page/about",
  linksUrl: "page/links",
  docUrl: "doc",
};
const ru = loadLocale("ru", __filename, PROPS);
const en = loadLocale("en", __filename, PROPS);
const configBase = siteConfigBase(PROPS, en);

export default {
  ...configBase,
  locales: {
    ...configBase.locales,
    en: { lang: "en-US", ...en },
    ru: { lang: "ru-RU", ...ru },
  },
};
