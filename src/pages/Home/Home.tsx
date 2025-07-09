import Button from "@/components/Button/Button";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useCurrentTabSetAtom } from "@/components/Tabbar/hooks";
import { aboutTabbarItems, aboutTabbarName } from "@/data/tabbar-items";
import logo from "@/assets/images/logo.jpeg";

const Home = () => {
  const navigate = useNavigate();
  const setCurrentAboutTab = useCurrentTabSetAtom(aboutTabbarName);

  return (
    <div className={classes.frame}>
      <img className={classes.logo} src={logo} alt="Logo" />
      <h3>Hi 👋</h3>
      <h3>My name is Shahram</h3>
      <p className={classes.whoami}>
        I'm a seasoned C and C++ developer with 24+ years of experience who also
        passionately explores the world of web technologies.
      </p>
      <div className={classes["button-bar"]}>
        <Button
          title="View or download my resume"
          onClick={() => {
            setCurrentAboutTab(aboutTabbarItems[0].id);
            navigate("/about/resume");
          }}
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
