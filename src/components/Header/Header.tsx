import Prompt from "@/components/Prompt/Prompt";
import navbarItems, { mainNavbarName } from "@/data/navbar-items";
import Navbar from "@/components/Navbar/Navbar";
import ThemeSelectorButton from "@/components/Theme/ThemeSelectorButton";
import classes from "./Header.module.css";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { promptPathAtom } from "@/components/Prompt/store";
import { useCurrentPageAtomValue } from "../Navbar/hooks";

const Header = () => {
  const navbarPath = useCurrentPageAtomValue(mainNavbarName);
  const setPromptPath = useSetAtom(promptPathAtom);

  useEffect(() => {
    setPromptPath(navbarPath === "/" ? "~" : `~${navbarPath}`);
  }, [navbarPath, setPromptPath]);

  return (
    <header className={classes.header}>
      <Prompt prompt="me@here" cursor={"|"} />
      <Navbar items={navbarItems} name={mainNavbarName} />
      <ThemeSelectorButton title="Change theme" />
    </header>
  );
};

export default Header;
