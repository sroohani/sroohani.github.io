import classes from "./Resume.module.css";
import resumeJson from "@/assets/json/resume.json";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <div className={classes.header}>
      <h3>{resumeJson.header.name}</h3>
      <a href="#">
        <Download />
      </a>
    </div>
  );
};

const Resume = () => {
  return (
    <>
      <Header />
      <hr className={classes.hr} />
    </>
  );
};

export default Resume;
