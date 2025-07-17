import { useEffect, useRef, useState, type ReactNode } from "react";
import classes from "./CollapsibleCard.module.css";
import { Plus, Minus } from "lucide-react";

interface Props {
  title?: string;
  children?: ReactNode;
  normalTitleFont?: boolean;
}

const CollapsibleCard = ({
  title,
  children,
  normalTitleFont = false,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const childerContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (titleRef.current && normalTitleFont) {
      titleRef.current.style.fontSize = "1rem";
      titleRef.current.style.fontWeight = "400";
    }
  }, [normalTitleFont]);
  useEffect(() => {
    if (contentRef.current && childerContainerRef.current) {
      if (isExpanded) {
        contentRef.current.style.height = `${childerContainerRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.height = "0";
      }
    }
  }, [isExpanded]);

  return (
    <div className={classes.frame}>
      <div
        className={classes["title-bar"]}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span ref={titleRef} className={classes.title}>
          {title}
        </span>
        {isExpanded ? <Minus /> : <Plus />}
      </div>

      <div ref={contentRef} className={classes.content}>
        <div
          ref={childerContainerRef}
          className={classes["children-container"]}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleCard;
