import { currentTabAtoms } from "./types";
import {
  useAtom,
  useAtomValue,
  useSetAtom,
  type PrimitiveAtom,
  type SetStateAction,
} from "jotai";

const getCurrentTabAtom = (tabbarName: string): PrimitiveAtom<number> => {
  const currentTabAtom = currentTabAtoms.get(tabbarName);
  if (!currentTabAtom) {
    throw new Error(
      `Tabbar ${tabbarName} does not have an atom. Did you forget to add it to the atoms map?`
    );
  }

  return currentTabAtom;
};

export const useCurrentTabAtom = (
  tabbarName: string
): ReturnType<typeof useAtom<number, [SetStateAction<number>], void>> => {
  const currentTabAtom = getCurrentTabAtom(tabbarName);

  return useAtom(currentTabAtom);
};

export const useCurrentTabAtomValue = (
  tabbarName: string
): ReturnType<typeof useAtomValue<PrimitiveAtom<number>>> => {
  const currentTabAtom = getCurrentTabAtom(tabbarName);

  return useAtomValue(currentTabAtom);
};

export const useCurrentTabSetAtom = (
  tabbarName: string
): ReturnType<typeof useSetAtom<PrimitiveAtom<number>>> => {
  const currentTabAtom = getCurrentTabAtom(tabbarName);

  return useSetAtom(currentTabAtom);
};
