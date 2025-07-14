import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

export type ModalCommand =
  | "ok"
  | "cancel"
  | "yes"
  | "no"
  | "next"
  | "previous"
  | "";

export type ButtonProperties = {
  id?: string;
  text: string;
  icon?: LucideIcon;
  command: ModalCommand;
};

export type ButtonGroup = ButtonProperties[];
export type ButtonGroups = Map<string, ButtonGroup>;

export interface CommonModalProps {
  title?: string;
  resetCommand?: () => void;
  moveOn?: () => void;
}

export type ModalItem = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>;
  commonModalProps: CommonModalProps;
  componentProps?: object;
};

// export interface ModalContentData {
//   type: string;
// }

// export type ReportDataFunc<T extends ModalContentData> = (data: T) => void;

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export type ModalValue<Props = any, T extends ModalContentData = any> = {
//   open: boolean;
//   content?: ComponentType<Props>;
//   command: ModalCommand;
//   buttonGroups: ButtonGroups | null;
//   reportData: ReportDataFunc<T> | null;
//   initialData: T | null;
// };
