import type { IconType } from "react-icons";

export type Link = {
  id: number;
  icon: IconType;
  title?: string;
  href?: string;
  withCopy?: boolean;
  textToCopy?: string;
};
