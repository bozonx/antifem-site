import Layout from "./Layout.vue";
import "vitepress-sls-blog-tmpl/site-tmpl-fix.css";
import "vitepress-sls-blog-tmpl/search-modal.css";
import { initLightbox } from "vitepress-sls-blog-tmpl/lightbox.js";
import { resolveTranslationsByFilePath } from "vitepress-sls-blog-tmpl/resolveTranslations.js";
import "./styles.css";

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp(ctx) {
    ctx.app.config.globalProperties.getLocales = () =>
      resolveTranslationsByFilePath(ctx.router.route.path);

    initLightbox(ctx);
  },
};
