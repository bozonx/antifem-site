import {
  LANG,
  base,
} from "vitepress-sls-blog-tmpl/src/configs/siteLocalesBase/en.js";
import { parseLocaleMenu } from "vitepress-sls-blog-tmpl/src/helpers/parseLocaleMenu.js";
import commonParams from "../commonParams";

const DOC = `/${LANG}/${commonParams.docUrl}/`;
const menuFilePath = "./menu/menu.en.yaml";

export default {
  ...base,
  title: "Antifeminism movement",
  description:
    "The Eden Project is a network of anarchist communes built on a mixture of socialist and market economies",
  themeConfig: {
    ...base.themeConfig,
    siteTitle: "Antifeminism movement",
    nav: [
      { text: "Donate", link: `/${LANG}/${commonParams.donateUrl}` },
      { text: "Description", link: DOC },
      { text: "Blog", link: commonParams.blogUrl },
      { text: "Our social media", link: `/${LANG}/${commonParams.linksUrl}` },
      { text: "About us", link: `/${LANG}/${commonParams.aboutUrl}` },
    ],
    footer: {
      message: "Copying is allowed only with a link to the source",
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
