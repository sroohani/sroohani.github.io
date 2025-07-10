import type { ReactNode } from "react";
import classes from "./MainFrame.module.css";

interface Props {
  children: ReactNode;
}

const MainFrame = ({ children }: Props) => {
  return <div className={classes["main-frame"]}>{children}</div>;
};

export default MainFrame;
