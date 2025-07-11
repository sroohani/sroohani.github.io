import { NavLink } from "react-router-dom";
import classes from "./NavbarItem.module.css";
import { type LucideIcon } from "lucide-react";
import { useCurrentPageSetAtom } from "./hooks";

interface NavbarItemProps {
  title: string;
  to: string;
  navbarName: string;
  icon?: LucideIcon;
}

const NavbarItem = ({ title, to, navbarName, icon: Icon }: NavbarItemProps) => {
  const setPath = useCurrentPageSetAtom(navbarName);

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
