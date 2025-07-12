import type { LucideIcon } from "lucide-react";
import classes from "./Button.module.css";
import { type MouseEvent } from "react";

interface Props {
  title: string;
  icon?: LucideIcon;
  onClick?: (e: MouseEvent<HTMLButtonElement> | null | undefined) => void;
}

const Button = ({ title, icon: Icon, onClick }: Props) => {
  return (
    <button className={classes.button} onClick={(e) => onClick && onClick(e)}>
      {Icon && <Icon />}
      {title}
    </button>
  );
};

export default Button;
