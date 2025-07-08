import classes from "./Projects.module.css";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className={classes.frame}>
      {projects.map((project) => (
        <ProjectCard {...project} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
