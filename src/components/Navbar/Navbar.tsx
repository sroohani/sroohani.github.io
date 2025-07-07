import { type NavbarItemDef } from "./types";
import NavbarItem from "./NavbarItem";
import classes from "./Navbar.module.css";

interface NavbarMenuProps {
  vertical?: boolean;
  items: NavbarItemDef[];
}

const Navbar = ({ vertical = false, items }: NavbarMenuProps) => {
  return (
    <nav className={`${classes.nav} ${vertical && classes.vertical}`}>
      {items.map((item) => (
        <NavbarItem key={item.id} {...item} />
      ))}
    </nav>
  );
};

export default Navbar;
