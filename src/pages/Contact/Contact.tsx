import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";
import { links } from "./contact-data";
import ContactList from "@/components/ContactList/ContactList";

const Contact = () => {
  return (
    <div className={classes.frame}>
      <ContactList links={links} />
      <hr className={classes.hr} />
      <h4 className={classes["message-title"]}>Send me a message</h4>
      <ContactForm />
    </div>
  );
};

export default Contact;
