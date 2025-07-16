import classes from "./JobExperience.module.css";
import { ChevronRight } from "lucide-react";

interface Props {
  from: string;
  to: string;
  companies: string[];
  positions: string[];
  projects: string[];
}

const JobExperience = ({ from, to, companies, positions, projects }: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes["from-to"]}>
        {from}
        {"  "}to{"  "}
        {to}
      </div>
      <div className={classes.section}>Companies:</div>
      <div className={classes.companies}>{companies.join(", ")}</div>
      <div className={classes.underline}></div>
      <div className={classes.section}>Positions:</div>
      <div className={classes.positions}>{positions.join(", ")}</div>
      <div className={classes.underline}></div>
      <div className={classes.section}>Projects:</div>
      <div className={classes.projects}>
        {projects.map((project, index) => (
          <div className={classes.project} key={index}>
            <ChevronRight />
            {project}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobExperience;
