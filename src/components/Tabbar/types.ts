import { atom } from "jotai";
import type { IconType } from "react-icons";

export type TabbarItemDef = {
  id: number;
  title: string;
  to?: string;
  icon?: IconType;
};

export type CurrentTabAtoms = Map<string, ReturnType<typeof atom<number>>>;

export const currentTabAtoms: CurrentTabAtoms = new Map();
