import { useNavigate } from "react-router-dom";
import classes from "./NotFound.module.css";
import type { MouseEvent } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  const handleHomeLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  return (
    <div className={classes.frame}>
      <h1>404</h1>
      <h4>What are you doing in the middle of nowhere?</h4>
      <a
        className={classes["home-link"]}
        onClick={(e) => handleHomeLinkClick(e)}
      >
        Go back home!
      </a>
    </div>
  );
};

export default NotFound;
