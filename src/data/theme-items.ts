import { Theme, type ThemeDef } from "@/types";

export const themes: ThemeDef[] = [
  {
    id: Theme.GREEN,
    tooltip: "Green",
    style: {
      backgroundColor: "black",
      color: "#33ff33",
    },
  },
  {
    id: Theme.AMBER,
    tooltip: "Amber",
    style: {
      backgroundColor: "black",
      color: "#ffcc00",
    },
  },
  {
    id: Theme.WHITE,
    tooltip: "White",
    style: {
      backgroundColor: "black",
      color: "#ffffff",
    },
  },
];

export default themes;
