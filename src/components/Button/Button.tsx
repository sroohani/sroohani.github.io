import type { LucideIcon } from "lucide-react";
import classes from "./Button.module.css";

interface Props {
  title: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

const Button = ({ title, icon: Icon, onClick }: Props) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {Icon && <Icon />}
      {title}
    </button>
  );
};

export default Button;
