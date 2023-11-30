import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/intro/",
  {
    text: "CONTENT",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [     
      "Chapter_00_Forewords",
      "Chapter_01_History",
      "Chapter_02_GettingStarted",
      "Chapter_03_FuntionAndMarketSegment",
      "Chapter_04_PackageIdeation",
      "Chapter_05_SizeAndProportion",
      "Chapter_06_OccupantPackaging",
      "Chapter_07_InteriorAndCargo",
      "Chapter_08_Powertrains",
      "Chapter_09_WheelAndTires",
      "Chapter_10_SuspensionAndChassis",
      "Chapter_11_BodiesAndExteriorTrim",
      "Chapter_12_Mobility",
      "Chapter_13_DesignExercises"
    ],
  },
]);
