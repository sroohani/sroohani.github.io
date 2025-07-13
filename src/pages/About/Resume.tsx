import classes from "./Resume.module.css";
import resumeJson from "@/assets/json/resume.json";
import { Download } from "lucide-react";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineMail } from "react-icons/md";
import { RiCellphoneLine } from "react-icons/ri";
import { CiLinkedin, CiLocationOn } from "react-icons/ci";
import { SiGithub } from "@icons-pack/react-simple-icons";
import IconLink from "@/components/IconLink/IconLink";
import { useAtom } from "jotai";
import { useRef } from "react";
import { showContactInfoModalAtom } from "@/components/ContactInfoModal/store";
import ContactInfoModal from "@/components/ContactInfoModal/ContactInfoModal";

const Header = () => {
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
    <div className={classes.header}>
      <div className={classes.title}>
        <h3>{resumeJson.header.name}</h3>
        <a href="#">
          <Download />
        </a>
      </div>
      <hr className={classes.hr} />
      <div className={classes.contact}>
        <IconLink
          icon={CiLocationOn}
          href={resumeJson.header.map}
          title={resumeJson.header.location}
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
        <IconLink
          icon={TfiWorld}
          title="Website"
          href={resumeJson.header.website}
        />
        <IconLink
          icon={SiGithub}
          title="GitHub"
          href={resumeJson.header.github}
        />
        <IconLink
          icon={CiLinkedin}
          title="LinkedIn"
          href={resumeJson.header.linkedin}
        />
        {showContactInfoModal && (
          <ContactInfoModal {...contactInfoModalData.current} />
        )}
      </div>
    </div>
  );
};

const Summary = () => {
  return <p>{resumeJson.summary}</p>;
};
const Resume = () => {
  return (
    <>
      <Header />
      <hr className={classes.hr} />
      <Summary />
      <hr className={classes.hr} />
    </>
  );
};

export default Resume;
