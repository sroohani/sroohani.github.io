import Prompt from "@/Prompt/Prompt";
import navbarItems from "@/data/navbar-items";
import Navbar from "@/components/Navbar/Navbar";
import ThemeSelectorButton from "@/components/Theme/ThemeSelectorButton";
import classes from "./Header.module.css";
import { useAtomValue, useSetAtom } from "jotai";
import { navbarPathAtom } from "@/components/Navbar/types";
import { useEffect } from "react";
import { promptPathAtom } from "@/Prompt/store";

const Header = () => {
  const navbarPath = useAtomValue(navbarPathAtom);
  const setPromptPath = useSetAtom(promptPathAtom);

  useEffect(() => {
    setPromptPath(navbarPath === "/" ? "~" : `~${navbarPath}`);
  }, [navbarPath, setPromptPath]);

  return (
    <header className={classes.header}>
      <Prompt prompt="me@here" cursor={"|"} />
      <Navbar items={navbarItems} />
      <ThemeSelectorButton />
    </header>
  );
};

export default Header;
