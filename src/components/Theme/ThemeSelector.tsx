import classes from "./ThemeSelector.module.css";
import { useAtom } from "jotai";
import { themeAtom } from "./store";
import { type ThemeInfo, themeInfo } from "./types";
import Theme from "./Theme";

const ThemeSelector = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const handleThemeChange = (newTheme: ThemeInfo): void => {
    setTheme(newTheme);
  };

  return (
    <div className={classes.overlay}>
      {themeInfo.map((info) => {
        return (
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
        );
      })}
    </div>
  );
};

export default ThemeSelector;
