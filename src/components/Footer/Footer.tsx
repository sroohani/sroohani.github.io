import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>Copyright &copy; 2025 Shahram Roohani</div>
      <div>
        Released under the{" "}
        <a
          className={classes.a}
          href="https://opensource.org/license/mit"
          target="_blank"
        >
          MIT License
        </a>
      </div>
    </footer>
  );
};

export default Footer;
