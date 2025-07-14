import { atom } from "jotai";
import { type ThemeInfo, themeInfo } from "./types";

export const showThemeSelectorAtom = atom(false);
export const themeAtom = atom<ThemeInfo>(themeInfo[0]);
