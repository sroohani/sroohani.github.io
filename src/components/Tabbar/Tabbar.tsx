import { ChevronLeft, ChevronRight } from "lucide-react";
import classes from "./Tabbar.module.css";
import { type TabbarItemDef } from "./types";
import TabbarItem from "./TabbarItem";
import { useCurrentTabAtom } from "./hooks";

interface TabbarProps {
  items: TabbarItemDef[];
  name: string;
}

const Tabbar = ({ items, name }: TabbarProps) => {
  const [currentTab, setCurrentTab] = useCurrentTabAtom(name);

  return (
    <div className={classes.frame}>
      <div className={classes.tabbar}>
        <ChevronLeft />
        {items.map((item) => (
          <TabbarItem
            key={item.id}
            {...item}
            active={currentTab === item.id}
            onClick={() => setCurrentTab(item.id)}
          />
        ))}

        <ChevronRight />
      </div>
      <hr className={classes.hr} />
    </div>
  );
};

export default Tabbar;
