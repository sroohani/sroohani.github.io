import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ThemeSelector from "./components/Theme/ThemeSelector";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { showThemeSelectorAtom } from "./components/Theme/store";
import { useEffect } from "react";
import { themeAtom } from "./components/Theme/store";
import { themeInfo } from "./components/Theme/types";
import { promptPathAtom } from "./Prompt/store";

function App() {
  const showThemeSelector = useAtomValue(showThemeSelectorAtom);
  const [theme, setTheme] = useAtom(themeAtom);
  const setPromptPath = useSetAtom(promptPathAtom);
  const location = useLocation();

  useEffect(() => {
    setPromptPath(location.pathname === "/" ? "~" : `~${location.pathname}`);
  });

  useEffect(() => {
    const themeName = localStorage.getItem("theme");
    let themeIndex = themeInfo.findIndex((th) => th.name === themeName);
    if (themeIndex === -1) {
      themeIndex = 0;
    }
    setTheme(themeInfo[themeIndex]);
  }, [setTheme]);

  useEffect(() => {
    const bodyElem = document.querySelector("body");

    themeInfo.forEach((th) => {
      bodyElem?.classList.remove(th.name);
    });

    bodyElem?.classList.add(theme.name);

    localStorage.setItem("theme", theme.name);
  }, [theme]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {showThemeSelector && <ThemeSelector />}
    </>
  );
}

export default App;
