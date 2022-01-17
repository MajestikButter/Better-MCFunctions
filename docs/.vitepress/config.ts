import { defineConfig } from "vitepress";

const newSideElement = (
  text: string,
  link: string,
  children?: ReturnType<typeof newSideElement>[]
) => {
  return {
    text,
    link,
    children,
  };
};
function getSidebar() {
  return [
    newSideElement("Introduction", "./Introduction/", [
      newSideElement("What is This?", "./Introduction/What"),
      newSideElement("Getting Started", "./Introduction/Getting Started"),
    ]),
    newSideElement("API", "./API/", [
      newSideElement("Commands", "./API/Commands"),
      newSideElement("Logic", "./API/Logic"),
    ]),
  ];
}

export default defineConfig({
  title: "Better MCFunctions",
  description: "A custom version of mcfunctions that expands syntax",
  lang: "en-US",
  base: "/Better-MCFunctions/",
  themeConfig: {
    docsDir: "docs",
    sidebar: getSidebar(),
    nav: [
      {
        text: "Home",
        link: "/",
      },
      { text: "Github", link: "/about/" },
      { text: "About", link: "/about/" },
    ],
  },
  markdown: {
    toc: {
      includeLevel: [1, 2, 3],
    },
  },
  outDir: "./docs/",
});
