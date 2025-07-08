import { atom } from "jotai";
import type { LucideIcon } from "lucide-react";

export type TabbarItemDef = {
  id: number;
  title: string;
  to?: string;
  icon?: LucideIcon;
};

export type CurrentTabAtoms = Map<string, ReturnType<typeof atom<number>>>;

export const currentTabAtoms: CurrentTabAtoms = new Map();
