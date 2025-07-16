import classes from "./ContactType.module.css";
import { CircleOff, Mail } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import "react-phone-number-input/style.css";
import PhoneInput, { type Value } from "react-phone-number-input";
import iran from "@/assets/images/Flag_of_Iran_simplified.svg";

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
  const [emailValue, setEmailValue] = useState("");
  const contactRef = useRef<HTMLSpanElement>(null);
  const maxContactLength = 128;

  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    let selectRefCurrent: HTMLSelectElement | null = null;
    const handleFormReset = () => {
      setContactOption("" as ContactOption);
      setWhatsappNumber("" as Value);
      setEmailValue("");
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

  const handleWhatsAppChange = (value: Value) => {
    if (value && value.length <= maxContactLength) {
      setWhatsappNumber(value as Value);
      if (contactRef.current) {
        contactRef.current.textContent = `${value.length}/${maxContactLength}`;
      }
    }
  };

  const handleEmailChange = (value: string) => {
    if (value.length <= maxContactLength) {
      setEmailValue(value);
      if (contactRef.current) {
        contactRef.current.textContent = `${value.length}/${maxContactLength}`;
      }
    }
  };

  return (
    <label className={classes.label} htmlFor="contact-select">
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
        <div className={classes["form-element-container"]}>
          <label className={classes["tel-container"]}>
            <PhoneInput
              flags={{ IR: () => <img src={iran} /> }}
              placeholder="Enter phone number"
              name="whatsapp"
              value={whatsappNumber}
              onChange={(value: Value) => handleWhatsAppChange(value)}
              required
            />
            <span className={classes["tel-floating-span"]}>
              WhatsApp Number
            </span>
            <span className={classes.required}>*</span>
          </label>
          <span ref={contactRef} className={classes.counter}>
            0/{maxContactLength}
          </span>
        </div>
      )}
      {contactOption === "email" && (
        <div className={classes["form-element-container"]}>
          <label className={classes["input-container"]}>
            <input
              className="contact"
              type="email"
              name="email"
              placeholder="Email"
              value={emailValue}
              onChange={(e) => handleEmailChange(e.target.value)}
              required
            />
            <span className={classes["floating-span"]}>Email</span>
            <span className={classes.required}>*</span>
          </label>
          <span ref={contactRef} className={classes.counter}>
            0/{maxContactLength}
          </span>
        </div>
      )}
    </label>
  );
};

export default ContactType;
