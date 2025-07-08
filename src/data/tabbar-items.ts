import { type TabbarItemDef } from "@/components/Tabbar/types";

import { FileUser, User } from "lucide-react";

export const aboutTabbarItems: TabbarItemDef[] = [
  {
    id: 0,
    title: "Resume",
    to: "/about/resume",
    icon: FileUser,
  },
  {
    id: 1,
    title: "Credits",
    to: "/about/credits",
    icon: User,
  },
];

export const aboutTabbarName = "about";
