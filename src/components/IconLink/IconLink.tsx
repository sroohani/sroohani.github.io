import { type IconType } from "react-icons";
import { TbCopy } from "react-icons/tb";
import { TbCopyCheck } from "react-icons/tb";
import classes from "./IconLink.module.css";
import { useEffect, useRef, useState, type MouseEvent } from "react";

interface Props {
  icon: IconType;
  title?: string;
  href?: string;
  withCopy?: boolean;
  textToCopy?: string;
  copyFallback?: (title: string, textToCopy: string) => void;
}

const IconLink = ({
  icon: Icon,
  title = "",
  href,
  withCopy = false,
  textToCopy = "",
  copyFallback,
}: Props) => {
  const canCopy: boolean =
    navigator.clipboard !== undefined &&
    navigator.clipboard.writeText !== undefined;
  const adaptedTitle = useRef<string>("");
  const [showCopy, setShowCopy] = useState(true);

  const handleCopy = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (canCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setShowCopy(false);
      setTimeout(() => setShowCopy(true), 5000);
    } else {
      if (copyFallback) {
        copyFallback(title, textToCopy);
      }
    }
  };

  useEffect(() => {
    if (withCopy) {
      if (canCopy) {
        adaptedTitle.current = `${title} - Click to copy`;
      } else {
        adaptedTitle.current = `${title} - Click to reveal`;
      }
    } else {
      adaptedTitle.current = title;
    }
  });

  return (
    <a
      href={withCopy ? "" : href}
      target={withCopy ? "_self" : "_blank"}
      onClick={withCopy ? handleCopy : undefined}
    >
      <div className={classes["icon-container"]} title={adaptedTitle.current}>
        <Icon className={classes.icon} />
        {withCopy &&
          canCopy &&
          (showCopy ? (
            <TbCopy className={classes.copy} />
          ) : (
            <TbCopyCheck className={classes.copy} />
          ))}
      </div>
    </a>
  );
};

export default IconLink;
