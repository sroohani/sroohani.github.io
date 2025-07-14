import { useSetAtom } from "jotai";
import { Palette } from "lucide-react";
import { showThemeSelectorAtom } from "./store";
import classes from "./ThemeSelectorButton.module.css";

interface Props {
  title?: string;
}

const ThemeSelectorButton = ({ title }: Props) => {
  const setShowThemeSelector = useSetAtom(showThemeSelectorAtom);
  const handleClick = () => {
    setShowThemeSelector(true);
  };

  return (
    <button className={classes.button} title={title} onClick={handleClick}>
      <Palette />
    </button>
  );
};

export default ThemeSelectorButton;
