// import RadioButton from "./ThemeRadioButton";
import classes from "./ThemeSelector.module.css";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  showThemeSelectorAtom,
  themeAtom,
  themeSelectorPositionAtom,
} from "./store";
import { type ThemeInfo, themeInfo } from "./types";
import { useOutsideCloseCommand } from "@/hooks/use-outside-close-command";
import { useEffect } from "react";
import Theme from "./Theme";

const ThemeSelector = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const setShowThemeSelector = useSetAtom(showThemeSelectorAtom);
  const themeSelectorPosition = useAtomValue(themeSelectorPositionAtom);

  const panelRef = useOutsideCloseCommand(() => {
    setShowThemeSelector(false);
  });

  const handleThemeChange = (newTheme: ThemeInfo): void => {
    setTheme(newTheme);
  };

  useEffect(() => {
    if (panelRef.current) {
      const boundingClientRect = panelRef.current.getBoundingClientRect();
      panelRef.current.style.left = `${
        themeSelectorPosition.x - boundingClientRect.width
      }px`;
      panelRef.current.style.top = `${themeSelectorPosition.y}px`;
    }
  });

  return (
    <div ref={panelRef} className={classes.panel}>
      {themeInfo.map((info) => {
        return (
          // <RadioButton
          //   value={info.name}
          //   name="theme"
          //   required={true}
          //   checked={theme.name === info.name}
          //   onChange={() => handleThemeChange(info)}
          //   focus={theme.name === info.name}
          //   key={info.id}
          // >
          <Theme
            text={info.displayName}
            name="theme"
            required={true}
            checked={theme.name === info.name}
            theme={info.name}
            onChange={() => handleThemeChange(info)}
            focus={theme.name === info.name}
            key={info.id}
          />
          // </RadioButton>
        );
      })}
    </div>
  );
};

export default ThemeSelector;
