import classes from "./Credit.module.css";

export interface CreditProps {
  id?: number;
  img?: string;
  title: string;
  href?: string;
}

const Credit = ({ img, title, href }: CreditProps) => {
  return (
    <div className={classes.credit}>
      <div className={classes["img-frame"]}>
        {img && <img className={classes.img} src={img} alt={title} />}
      </div>
      <div className={classes["link-frame"]}>
        <div className={classes.hr}></div>
        <a className={classes.link} href={href} target="_blank">
          {title}
        </a>
        <div className={classes.hr}></div>
      </div>
    </div>
  );
};

export default Credit;
