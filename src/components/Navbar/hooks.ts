import { currentPageAtoms } from "./types";

import {
  useAtom,
  useAtomValue,
  useSetAtom,
  type PrimitiveAtom,
  type SetStateAction,
} from "jotai";

const getCurrentPageAtom = (navbarName: string): PrimitiveAtom<string> => {
  const currentPageAtom = currentPageAtoms.get(navbarName);
  if (!currentPageAtom) {
    throw new Error(
      `Navbar "${navbarName}" does not have an atom. Did you forget to add it to the atoms map?`
    );
  }

  return currentPageAtom;
};

export const useCurrentPageAtom = (
  navbarName: string
): ReturnType<typeof useAtom<string, [SetStateAction<string>], void>> => {
  const currentPageAtom = getCurrentPageAtom(navbarName);

  return useAtom(currentPageAtom);
};

export const useCurrentPageAtomValue = (
  navbarName: string
): ReturnType<typeof useAtomValue<PrimitiveAtom<string>>> => {
  const currentPageAtom = getCurrentPageAtom(navbarName);

  return useAtomValue(currentPageAtom);
};

export const useCurrentPageSetAtom = (
  navbarName: string
): ReturnType<typeof useSetAtom<PrimitiveAtom<string>>> => {
  const currentPageAtom = getCurrentPageAtom(navbarName);

  return useSetAtom(currentPageAtom);
};
