import classes from "./Language.module.css";

interface Props {
  name: string;
  level: string;
}

const Language = ({ name, level }: Props) => {
  return (
    <div className={classes.language}>
      <div className={classes.name}>{name}</div>
      <div>{level}</div>
    </div>
  );
};

export default Language;
