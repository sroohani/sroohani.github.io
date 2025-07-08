import Tabbar from "@/components//Tabbar/Tabbar";
import classes from "./About.module.css";
import { aboutTabbarItems, aboutTabbarName } from "@/data/tabbar-items";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCurrentTabAtomValue } from "@/components/Tabbar/hooks";

const About = () => {
  const navigate = useNavigate();
  const currentTabId = useCurrentTabAtomValue(aboutTabbarName);

  useEffect(() => {
    const currentTabIndex = aboutTabbarItems.findIndex(
      (item) => item.id === currentTabId
    );
    if (currentTabIndex !== -1 && aboutTabbarItems[currentTabIndex].to) {
      navigate(aboutTabbarItems[currentTabIndex].to);
    }
  }, [currentTabId, navigate]);

  return (
    <div className={classes.frame}>
      <Tabbar items={aboutTabbarItems} name={aboutTabbarName} />
      <Outlet />
    </div>
  );
};

export default About;
