import { atom } from "jotai";
import { type ThemeInfo, type ViewportPosition, themeInfo } from "./types";

export const showThemeSelectorAtom = atom(false);
export const themeSelectorPositionAtom = atom<ViewportPosition>({ x: 0, y: 0 });
export const themeAtom = atom<ThemeInfo>(themeInfo[0]);
