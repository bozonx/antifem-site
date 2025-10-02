import DefaultTheme from "vitepress/theme";
import "vitepress-sls-blog-tmpl/site-tmpl-fix.css";
import { initLightbox } from "vitepress-sls-blog-tmpl/lightbox.js";
import { resolveTranslationsByFilePath } from "vitepress-sls-blog-tmpl/resolveTranslations.js";
import "./styles.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.config.globalProperties.getLocales = () =>
      resolveTranslationsByFilePath(ctx.router.route.path);

    initLightbox(ctx);
  },
};
