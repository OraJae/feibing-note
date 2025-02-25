import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/interview/": 'structure',
  "/server/": [
    {
      // text: "服务器",
      // icon: "laptop-code",
      children: "structure"
    }
  ],
  // "/": [
  //   "",
  //   "portfolio",
  //   {
  //     text: "案例",
  //     icon: "laptop-code",
  //     prefix: "demo/",
  //     link: "demo/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文档",
  //     icon: "book",
  //     prefix: "guide/",
  //     children: "structure",
  //   },
  //   {
  //     text: "面试",
  //     link: "interview/",
  //     prefix: "interview/",
  //     activeMatch: "^/interview",
  //     collapsible: true,
  //     expanded: true,
  //     children: "structure"
  //   },
  //   {
  //     text: "服务器",
  //     link: "server/",
  //     prefix: "server/",
  //     activeMatch: "^/server",
  //     collapsible: true,
  //     expanded: true,
  //     children: "structure"
  //   },
  //   // {
  //   //   text: "幻灯片",
  //   //   icon: "person-chalkboard",
  //   //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
  //   // },
  // ],
});
