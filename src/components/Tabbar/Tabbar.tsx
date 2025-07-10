import { ChevronLeft, ChevronRight } from "lucide-react";
import classes from "./Tabbar.module.css";
import { type TabbarItemDef } from "./types";
import TabbarItem from "./TabbarItem";
import { useCurrentTabAtom } from "./hooks";
import { useEffect, useRef, useState } from "react";

interface TabbarProps {
  items: TabbarItemDef[];
  name: string;
}

const left = 0;
const right = 1;

const Tabbar = ({ items, name }: TabbarProps) => {
  const [currentTab, setCurrentTab] = useCurrentTabAtom(name);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabbarRef = useRef<HTMLDivElement>(null);
  const [leftChevronDisabled, setLeftChevronDisabled] = useState(false);
  const [rightChevronDisabled, setRightChevronDisabled] = useState(false);

  useEffect(() => {
    let tabsContainerRefCurrent: HTMLDivElement | null;
    let isDragging = false;
    let startX = 0,
      scrollLeft = 0;

    const handleWheelEvent = (e: WheelEvent) => {
      e.preventDefault();
      if (tabsContainerRef.current) {
        tabsContainerRef.current.scrollLeft += e.deltaY;
        updateChevronStates();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (tabsContainerRef.current) {
        isDragging = true;
        startX = e.touches[0].pageX - tabsContainerRef.current.offsetLeft;
        scrollLeft = tabsContainerRef.current.scrollLeft;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) {
        return;
      }
      e.preventDefault();
      if (tabsContainerRef.current) {
        const x = e.touches[0].pageX - tabsContainerRef.current.offsetLeft;
        const walkX = x - startX;
        tabsContainerRef.current.scrollLeft = scrollLeft - walkX;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      updateChevronStates();
    };

    if (tabsContainerRef.current) {
      updateChevronStates();
      tabsContainerRefCurrent = tabsContainerRef.current;
      tabsContainerRef.current.addEventListener("wheel", handleWheelEvent, {
        passive: false,
      });

      tabsContainerRef.current.addEventListener(
        "touchstart",
        handleTouchStart,
        {
          passive: false,
        }
      );
      tabsContainerRef.current.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      tabsContainerRef.current.addEventListener("touchend", handleTouchEnd, {
        passive: false,
      });
    }

    return () => {
      if (tabsContainerRefCurrent) {
        tabsContainerRefCurrent.removeEventListener("wheel", handleWheelEvent);

        tabsContainerRefCurrent.removeEventListener(
          "touchstart",
          handleTouchStart
        );
        tabsContainerRefCurrent.removeEventListener(
          "touchmove",
          handleTouchMove
        );
        tabsContainerRefCurrent.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  const updateChevronStates = () => {
    setLeftChevronDisabled(tabsContainerRef.current!.scrollLeft === 0);
    setRightChevronDisabled(
      Math.abs(
        tabsContainerRef.current!.scrollLeft -
          (tabsContainerRef.current!.scrollWidth -
            tabsContainerRef.current!.getBoundingClientRect().width)
      ) < 1
    );
  };

  const handleChevronClick = (side: number): void => {
    if (tabsContainerRef.current) {
      switch (side) {
        case left:
          tabsContainerRef.current.scrollLeft -= 64;
          break;

        case right:
          tabsContainerRef.current.scrollLeft += 64;
          break;

        default:
          throw new Error(`Unexpected value: ${side as never}`);
      }

      updateChevronStates();
    }
  };

  return (
    <div className={classes.frame}>
      <div ref={tabbarRef} className={classes.tabbar}>
        <button
          className={`${classes.chevron} ${classes["chevron-left"]}`}
          onClick={() => handleChevronClick(left)}
          disabled={leftChevronDisabled}
        >
          <ChevronLeft />
        </button>
        <div ref={tabsContainerRef} className={classes["tabs-container"]}>
          {items.map((item) => (
            <TabbarItem
              key={item.id}
              {...item}
              active={currentTab === item.id}
              onClick={() => setCurrentTab(item.id)}
            />
          ))}
        </div>
        <button
          className={`${classes.chevron} ${classes["chevron-right"]}`}
          onClick={() => handleChevronClick(right)}
          disabled={rightChevronDisabled}
        >
          <ChevronRight />
        </button>
      </div>
      <hr className={classes.hr} />
    </div>
  );
};

export default Tabbar;
