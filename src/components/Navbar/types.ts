import { atom } from "jotai";
import type { LucideIcon } from "lucide-react";

export type NavbarItemDef = {
  id: number;
  title: string;
  to: string;
  icon?: LucideIcon;
};

export type CurrentPageAtoms = Map<string, ReturnType<typeof atom<string>>>;

export const currentPageAtoms: CurrentPageAtoms = new Map();
