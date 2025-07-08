import { SiGithub, SiNpm } from "@icons-pack/react-simple-icons";
import { AppWindow } from "lucide-react";
import classes from "./ProjectCard.module.css";
import noImage from "@/assets/images/no-image.jpg";

export interface ProjectCardProps {
  id: number;
  name: string;
  description?: string;
  img?: string;
  github: string;
  live?: string;
  npm?: string;
}

const ProjectCard = ({
  name,
  description,
  img,
  github,
  live,
  npm,
}: ProjectCardProps) => {
  return (
    <div className={classes.card}>
      <h5 className={classes.name}>{name}</h5>
      <hr className={classes.hr} />
      <div className={classes["img-frame"]}>
        <a
          href={
            img ??
            "https://www.pexels.com/photo/codes-on-tilt-shift-lens-2004161/"
          }
          target="_blank"
          title={
            img
              ? "Click to view the full size image"
              : "This project doesn't have an image.\nPhoto by Markus Spiske from Pexels"
          }
        >
          <img src={img ?? noImage} alt={name} />
        </a>
      </div>
      {description && <p className={classes.description}>{description}</p>}
      <hr className={classes.hr} />
      <div className={classes.social}>
        <a href={github} target="_blank">
          <SiGithub title="Source code on GitHub" />
        </a>

        {live && (
          <a href={live} target="_blank" title="View live">
            <AppWindow />
          </a>
        )}
        {npm && (
          <a href={npm} target="_blank">
            <SiNpm title="Package on npm" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
