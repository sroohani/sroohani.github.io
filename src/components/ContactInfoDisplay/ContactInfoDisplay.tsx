import { useEffect, useRef } from "react";
import classes from "./ContactInfoDisplay.module.css";

type Props = {
  text: string;
};

const ContactInfoDisplay = ({ text }: Props) => {
  const textRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.select();
    }
  }, []);

  return (
    <div className={classes.panel}>
      <input
        ref={textRef}
        className={classes.text}
        type="text"
        readOnly
        value={text}
      />
    </div>
  );
};

export default ContactInfoDisplay;
