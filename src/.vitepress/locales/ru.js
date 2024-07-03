import {
  LANG,
  base,
} from "vitepress-sls-blog-tmpl/src/configs/siteLocalesBase/ru.js";
import { parseLocaleMenu } from "vitepress-sls-blog-tmpl/src/helpers/parseLocaleMenu.js";
import commonParams from "../commonParams";

const DOC = `/${LANG}/${commonParams.docUrl}/`;
const menuFilePath = "./menu/menu.ru.yaml";

export default {
  ...base,
  title: "Движение Антифеминизм",
  description:
    "Движение синтетический антифеминизм направлено на уравнивание прав и привелегий мужчин и женищин, соответсвенно на борьбу с феминизмом как источником неравноправия",
  themeConfig: {
    ...base.themeConfig,
    siteTitle: "Движение Антифеминизм",
    nav: [
      { text: "Донат", link: `/${LANG}/${commonParams.donateUrl}` },
      { text: "Описание проекта", link: DOC },
      { text: "Блог", link: commonParams.blogUrl },
      { text: "Мы в соц сетях", link: `/${LANG}/${commonParams.linksUrl}` },
      { text: "О нас", link: `/${LANG}/${commonParams.aboutUrl}` },
    ],
    footer: {
      message: "Копирование разрешено только со ссылкой на источник",
      copyright: "Copyright © 2024-present Antifem movement",
    },
    editLink: {
      pattern: commonParams.editLinkPattern,
      ...base.themeConfig.editLink,
    },
    sidebar: {
      [DOC]: parseLocaleMenu(__filename, menuFilePath, DOC),
    },
  },
};
