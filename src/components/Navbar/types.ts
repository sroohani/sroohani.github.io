import { atom } from "jotai";
import type { LucideIcon } from "lucide-react";

export type NavbarItemDef = {
  id: number;
  title: string;
  to: string;
  icon?: LucideIcon;
};

export const navbarPathAtom = atom("/");
