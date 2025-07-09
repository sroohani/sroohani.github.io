import classes from "./TabbarItem.module.css";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, type MouseEvent } from "react";

interface TabbarItemProps {
  title: string;
  to?: string;
  icon?: LucideIcon;
  active: boolean;
  onClick?: () => void;
}

const TabbarItem = ({
  title,
  icon: Icon,
  active,
  onClick,
}: TabbarItemProps) => {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (frameRef.current) {
      if (active) {
        frameRef.current.classList.add("active");
      } else {
        frameRef.current.classList.remove("active");
      }
    }
  }, [active]);

  const clickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <div ref={frameRef} className={classes.frame}>
      <a
        className={classes.navlink}
        href="#"
        onClick={(e) => {
          clickHandler(e);
        }}
      >
        {Icon && <Icon className={classes.icon} />}
        <span className={classes.title}>{title}</span>
      </a>
      {active && <hr className={classes.hr} />}
    </div>
  );
};

export default TabbarItem;
