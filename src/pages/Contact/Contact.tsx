import { SiGithub } from "@icons-pack/react-simple-icons";
import { CiLinkedin } from "react-icons/ci";
import { RiCellphoneLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { TbCopy } from "react-icons/tb";
import { TbCopyCheck } from "react-icons/tb";

import classes from "./Contact.module.css";
import resumeJson from "@/assets/json/resume.json";
import { useState } from "react";

const cellphone = 0;
const email = 1;

const Contact = () => {
  const [showCellPhoneCopy, setShowCellPhoneCopy] = useState(true);
  const [showEmailCopy, setShowEmailCopy] = useState(true);

  const handleCopy = (what: number) => {
    switch (what) {
      case email:
        navigator.clipboard.writeText(resumeJson.header.email);
        setShowEmailCopy(false);
        setTimeout(() => setShowEmailCopy(true), 5000);
        break;

      case cellphone:
        navigator.clipboard.writeText(resumeJson.header.cellphone);
        setShowCellPhoneCopy(false);
        setTimeout(() => setShowCellPhoneCopy(true), 5000);
        break;

      default:
        break;
    }
  };

  return (
    <div className={classes.frame}>
      <div className={classes.social}>
        <a href="https://github.com/sroohani" target="_blank">
          <SiGithub className="icon" title="GitHub" />
        </a>

        <a href="https://www.linkedin.com/in/shahramroohani/" target="_blank">
          <CiLinkedin className="icon" title="LinkedIn" />
        </a>
        <a
          href="#"
          title="Email - Click to copy"
          onClick={(e) => {
            e.preventDefault();
            handleCopy(email);
          }}
        >
          <MdOutlineMail className="icon" />
          {showEmailCopy ? (
            <TbCopy className="copy" />
          ) : (
            <TbCopyCheck className="copy" />
          )}
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleCopy(cellphone);
          }}
        >
          <RiCellphoneLine
            className="icon"
            title="Cell Phone - Click to copy"
          />
          {showCellPhoneCopy ? (
            <TbCopy className="copy" />
          ) : (
            <TbCopyCheck className="copy" />
          )}
        </a>
      </div>
      <hr className={classes.hr} />
    </div>
  );
};

export default Contact;
