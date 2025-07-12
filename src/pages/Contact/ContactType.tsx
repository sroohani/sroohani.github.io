import classes from "./ContactType.module.css";
import { CircleOff, Mail } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import "react-phone-number-input/style.css";
import PhoneInput, { type Value } from "react-phone-number-input";

import { useEffect, useRef, useState, type ChangeEvent } from "react";

export type ContactOption = "email" | "whatsapp" | "";

interface Props {
  onContactOptionChange?: (contactOption: ContactOption) => void;
}

const ContactType = ({ onContactOptionChange }: Props) => {
  const [contactOption, setContactOption] = useState<ContactOption>("");
  const [whatsappNumber, setWhatsappNumber] = useState<Value | undefined>(
    "" as Value
  );
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    let selectRefCurrent: HTMLSelectElement | null = null;
    const handleFormReset = () => {
      setContactOption("" as ContactOption);
    };

    if (selectRef.current && selectRef.current.form) {
      selectRefCurrent = selectRef.current;
      selectRef.current.form.addEventListener("reset", handleFormReset);
    }

    return () => {
      if (selectRefCurrent) {
        selectRefCurrent.form!.removeEventListener("reset", handleFormReset);
      }
    };
  }, []);

  const handleContactChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setContactOption(e.target.value as ContactOption);
    if (onContactOptionChange) {
      onContactOptionChange(contactOption);
    }
  };

  return (
    <label className={classes.label} htmlFor="contactSelect">
      <span className={classes.title}>Contact:</span>
      {contactOption === "" && <CircleOff />}
      {contactOption === "whatsapp" && <SiWhatsapp />}
      {contactOption === "email" && <Mail />}
      <select
        ref={selectRef}
        className={classes.select}
        name="contact"
        id="contact-select"
        onChange={(e) => handleContactChange(e)}
      >
        <option value="">None</option>
        <option value="email">Email</option>
        <option value="whatsapp">WhatsApp</option>
      </select>
      {contactOption === "" && <div className={classes.none} />}
      {contactOption === "whatsapp" && (
        <label className={classes["tel-container"]}>
          <PhoneInput
            placeholder="Enter phone number"
            name="whatsapp"
            value={whatsappNumber}
            onChange={setWhatsappNumber}
          />
          <span className={classes["tel-floating-span"]}>WhatsApp Number</span>
        </label>
      )}
      {contactOption === "email" && (
        <label className={classes["input-container"]}>
          <input type="email" name="email" placeholder="Email" />
          <span className={classes["floating-span"]}>Email</span>
        </label>
      )}
    </label>
  );
};

export default ContactType;
