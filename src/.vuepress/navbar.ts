import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "目录",
    icon: "home1",
    link: "/",
  },
  {
    text: "面试",
    icon: "zhenrenmianshi",
    link: "/interview/css",
  },
  {
    text: "服务器",
    icon: "slice-server-",
    link: "/server/linux",
  }
  // "/portfolio",
  // "/demo/",
  // {
  //   text: "指南",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
