import { NavLink } from "react-router-dom";
import classes from "./NavbarItem.module.css";
import { type LucideIcon } from "lucide-react";
import { useSetAtom } from "jotai";
import { navbarPathAtom } from "./types";

interface NavbarItemProps {
  title: string;
  to: string;
  icon?: LucideIcon;
}

const NavbarItem = ({ title, to, icon: Icon }: NavbarItemProps) => {
  const setPath = useSetAtom(navbarPathAtom);

  return (
    <NavLink className={classes.navlink} to={to} onClick={() => setPath(to)}>
      <div className={classes.content}>
        {Icon && <Icon className={classes.icon} />}
        <span className={classes.title}>{title}</span>
      </div>
      <div className={classes.underline}></div>
    </NavLink>
  );
};

export default NavbarItem;
