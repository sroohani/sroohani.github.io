import classes from "./Social.module.css";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { CiLinkedin } from "react-icons/ci";
import { RiCellphoneLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import resumeJson from "@/assets/json/resume.json";
import { useAtom } from "jotai";
import { showContactInfoModalAtom } from "@/components/ContactInfoModal/store";
import ContactInfoModal from "@/components/ContactInfoModal/ContactInfoModal";
import IconLink from "@/components/IconLink/IconLink";
import { useRef } from "react";

const Social = () => {
  const [showContactInfoModal, setShowContactInfoModal] = useAtom(
    showContactInfoModalAtom
  );
  const contactInfoModalData = useRef<{ title: string; text: string }>({
    title: "",
    text: "",
  });

  const handleContactItemClick = (title: string, text: string) => {
    contactInfoModalData.current = { title, text };
    setShowContactInfoModal(true);
  };

  return (
    <div className={classes.frame}>
      <IconLink
        icon={SiGithub}
        href="https://github.com/sroohani"
        title="GitHub"
      />
      <IconLink
        icon={CiLinkedin}
        href="https://www.linkedin.com/in/shahramroohani/"
        title="LinkedIn"
      />
      <IconLink
        icon={MdOutlineMail}
        withCopy={true}
        textToCopy={resumeJson.header.email}
        title="Email"
        copyFallback={() =>
          handleContactItemClick("Email", resumeJson.header.email)
        }
      />
      <IconLink
        icon={RiCellphoneLine}
        withCopy={true}
        textToCopy={resumeJson.header.cellphone}
        title="Cell Phone"
        copyFallback={() =>
          handleContactItemClick("Cell Phone", resumeJson.header.cellphone)
        }
      />
      {showContactInfoModal && (
        <ContactInfoModal {...contactInfoModalData.current} />
      )}
    </div>
  );
};

export default Social;
