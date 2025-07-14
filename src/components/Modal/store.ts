import { atom } from "jotai";
import type { ModalItem, ButtonGroups } from "./types";
// import type { ModalValue } from "./types";

// export const modalAtom = atom<ModalValue>({
//   open: false,
//   command: "",
//   buttonGroups: null,
//   reportData: null,
//   initialData: null,
// });

export const showModalAtom = atom(false);
export const semiOpaqueBackgroundAtom = atom(true);
export const modalButtonGroupsAtom = atom<ButtonGroups>(new Map());
export const modalItemsAtom = atom<ModalItem[]>([]);
// export const modalCommandAtom = atom<ModalCommand>("");
