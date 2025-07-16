import { useSetAtom } from "jotai";
import ContactInfoDisplay from "@/components/ContactInfoDisplay/ContactInfoDisplay";
import { modalConfigAtom } from "@/components/Modal/store";

export const useContactItemClickHandler = () => {
  const setModalConfig = useSetAtom(modalConfigAtom);
  return (title: string, text: string) => {
    setModalConfig({
      showTitle: true,
      showCloseButton: true,
      closeOnClickOutside: true,
      semiOpaqueBackground: true,
      items: [
        {
          component: ContactInfoDisplay,
          commonModalProps: {
            title,
          },
          componentProps: Object.fromEntries([["text", text]]),
        },
      ],
      buttonGroups: new Map(),
      show: true,
    });
  };
};
