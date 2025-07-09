import { type NavbarItemDef } from "./types";
import NavbarItem from "./NavbarItem";
import classes from "./Navbar.module.css";

interface NavbarMenuProps {
  name: string;
  items: NavbarItemDef[];
  vertical?: boolean;
}

const Navbar = ({ name, items, vertical = false }: NavbarMenuProps) => {
  return (
    <nav className={`${classes.nav} ${vertical && classes.vertical}`}>
      {items.map((item) => (
        <NavbarItem key={item.id} {...item} navbarName={name} />
      ))}
    </nav>
  );
};

export default Navbar;
