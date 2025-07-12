import classes from "./Contact.module.css";
import Social from "./Social";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className={classes.frame}>
      <Social />
      <hr className={classes.hr} />
      <h4 className={classes["message-title"]}>Send me a message</h4>
      <ContactForm />
    </div>
  );
};

export default Contact;
