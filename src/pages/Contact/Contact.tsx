import { SiGithub } from "@icons-pack/react-simple-icons";
import { CiLinkedin } from "react-icons/ci";
import { RiCellphoneLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { TbCopy } from "react-icons/tb";
import { TbCopyCheck } from "react-icons/tb";
import ContactInfoModal from "./ContactInfoModal";

import classes from "./Contact.module.css";
import resumeJson from "@/assets/json/resume.json";
import { useState } from "react";
import { useAtom } from "jotai";
import { showContactInfoModalAtom } from "./store";

const cellphone = 0;
const email = 1;

const Contact = () => {
  const [showCellPhoneCopy, setShowCellPhoneCopy] = useState(true);
  const [showEmailCopy, setShowEmailCopy] = useState(true);
  const [showContactInfoModal, setShowContactInfoModal] = useAtom(
    showContactInfoModalAtom
  );
  const [contactInfoModalData, setContactInfoModalData] = useState<{
    title: string;
    text: string;
  }>({ title: "", text: "" });

  const canCopy: boolean =
    navigator.clipboard !== undefined &&
    navigator.clipboard.writeText !== undefined;

  const handleCopy = async (what: number) => {
    try {
      switch (what) {
        case email:
          await navigator.clipboard.writeText(resumeJson.header.email);
          setShowEmailCopy(false);
          setTimeout(() => setShowEmailCopy(true), 5000);
          break;

        case cellphone:
          await navigator.clipboard.writeText(resumeJson.header.cellphone);
          setShowCellPhoneCopy(false);
          setTimeout(() => setShowCellPhoneCopy(true), 5000);
          break;

        default:
          break;
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(`Error copying text to clipboard: ${err}`);
      }
    }
  };

  const handleContactInfoClick = (what: number) => {
    switch (what) {
      case email:
        setContactInfoModalData({
          title: "Email",
          text: resumeJson.header.email,
        });
        break;

      case cellphone:
        setContactInfoModalData({
          title: "Cell Phone",
          text: resumeJson.header.cellphone,
        });
        break;
      default:
        return;
    }

    setShowContactInfoModal(true);
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
          title={`Email - Click to ${canCopy ? "copy" : "reveal"}`}
          onClick={(e) => {
            e.preventDefault();
            if (canCopy) {
              handleCopy(email);
            } else {
              handleContactInfoClick(email);
            }
          }}
        >
          <MdOutlineMail className="icon" />
          {canCopy &&
            (showEmailCopy ? (
              <TbCopy className="copy" />
            ) : (
              <TbCopyCheck className="copy" />
            ))}
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (canCopy) {
              handleCopy(cellphone);
            } else {
              handleContactInfoClick(cellphone);
            }
          }}
        >
          <RiCellphoneLine
            className="icon"
            title={`Cell Phone - Click to ${canCopy ? "copy" : "reveal"}`}
          />
          {canCopy &&
            (showCellPhoneCopy ? (
              <TbCopy className="copy" />
            ) : (
              <TbCopyCheck className="copy" />
            ))}
        </a>
      </div>
      {showContactInfoModal && <ContactInfoModal {...contactInfoModalData} />}
      <hr className={classes.hr} />
    </div>
  );
};

export default Contact;
