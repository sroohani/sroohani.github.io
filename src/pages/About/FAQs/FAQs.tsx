import classes from "./FAQs.module.css";

const Why = () => {
  return (
    <div className={classes.container}>
      <div className={classes.question}>Why did I choose these themes?</div>
      <p className={classes.answer}>
        Simply put, nostalgia. They remind me of the monochrome displays we had
        in our highschool in 1995, when I started using IBM PCs.
      </p>
    </div>
  );
};

export default Why;
