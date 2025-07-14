import Prompt from "@/components/Prompt/Prompt";
import navbarItems, { mainNavbarName } from "@/data/navbar-items";
import Navbar from "@/components/Navbar/Navbar";
import ThemeSelectorButton from "@/components/Theme/ThemeSelectorButton";
import classes from "./Header.module.css";
import { useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";
import { promptPathAtom } from "@/components/Prompt/store";
import { useCurrentPageAtomValue } from "../Navbar/hooks";
import { showThemeSelectorAtom } from "../Theme/store";
import {
  modalButtonGroupsAtom,
  modalItemsAtom,
  semiOpaqueBackgroundAtom,
  showModalAtom,
} from "../Modal/store";
import ThemeSelector from "../Theme/ThemeSelector";

const Header = () => {
  const navbarPath = useCurrentPageAtomValue(mainNavbarName);
  const setPromptPath = useSetAtom(promptPathAtom);
  const [showThemeSelector, setShowThemeSelector] = useAtom(
    showThemeSelectorAtom
  );
  const setModalItems = useSetAtom(modalItemsAtom);
  const setModalButtonGroups = useSetAtom(modalButtonGroupsAtom);
  const setSemiOpaqueBackground = useSetAtom(semiOpaqueBackgroundAtom);
  const setShowModal = useSetAtom(showModalAtom);

  useEffect(() => {
    setPromptPath(navbarPath === "/" ? "~" : `~${navbarPath}`);
  }, [navbarPath, setPromptPath]);

  useEffect(() => {
    if (showThemeSelector) {
      setShowThemeSelector(false);
      setModalItems([
        {
          component: ThemeSelector,
          commonModalProps: {
            title: "Change Theme",
          },
        },
      ]);
      setModalButtonGroups(new Map());
      setSemiOpaqueBackground(false);
      setShowModal(true);
    }
  }, [
    showThemeSelector,
    setShowThemeSelector,
    setModalItems,
    setModalButtonGroups,
    setSemiOpaqueBackground,
    setShowModal,
  ]);

  return (
    <header className={classes.header}>
      <Prompt prompt="me@here" cursor={"|"} />
      <Navbar items={navbarItems} name={mainNavbarName} />
      <ThemeSelectorButton title="Change theme" />
    </header>
  );
};

export default Header;
