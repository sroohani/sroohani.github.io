import { useSetAtom } from "jotai";
import { Palette } from "lucide-react";
import type { MouseEvent } from "react";
import { showThemeSelectorAtom, themeSelectorPositionAtom } from "./store";
import classes from "./ThemeSelectorButton.module.css";

interface Props {
  title?: string;
}

const ThemeSelectorButton = ({ title }: Props) => {
  const setShowThemeSelector = useSetAtom(showThemeSelectorAtom);
  const setThemeSelectorPosition = useSetAtom(themeSelectorPositionAtom);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const boundingClientRect = e.currentTarget.getBoundingClientRect();

    setThemeSelectorPosition({
      x: boundingClientRect.right,
      y: boundingClientRect.bottom,
    });
    setShowThemeSelector((prev) => !prev);
  };

  return (
    <button className={classes.button} title={title} onClick={handleClick}>
      <Palette />
    </button>
  );
};

export default ThemeSelectorButton;
