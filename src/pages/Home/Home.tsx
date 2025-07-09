import Button from "@/components/Button/Button";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.frame}>
      <h3>Hi 👋</h3>
      <h3>My name is Shahram</h3>
      <p className={classes.whoami}>
        I'm a seasoned C and C++ developer who also passionately explores the
        world of web technologies.
      </p>
      <div className={classes["button-bar"]}>
        <Button
          title="View or download my resume"
          onClick={() => navigate("/about/resume")}
        />
        <Button
          title="Send me a message"
          onClick={() => navigate("/contact")}
        />
      </div>
    </div>
  );
};

export default Home;
