import Credit from "../Credit/Credit";
import { creditsInfo } from "../data";
import classes from "./Credits.module.css";

const Credits = () => {
  return (
    <div className={classes.frame}>
      {creditsInfo.map((credit) => (
        <Credit {...credit} key={credit.id} />
      ))}
    </div>
  );
};

export default Credits;
