import { type NavbarItemDef } from "@/components/Navbar/types";

import { House, FolderCode, Info, Contact } from "lucide-react";

const navbarItems: NavbarItemDef[] = [
  {
    id: 0,
    title: "Home",
    to: "/",
    icon: House,
  },
  {
    id: 1,
    title: "Projects",
    to: "/projects",
    icon: FolderCode,
  },
  {
    id: 2,
    title: "About",
    icon: Info,
    to: "/about",
  },
  {
    id: 3,
    title: "Contact",
    to: "/contact",
    icon: Contact,
  },
];

export default navbarItems;
