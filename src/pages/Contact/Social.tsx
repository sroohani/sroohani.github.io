import classes from "./Social.module.css";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { CiLinkedin } from "react-icons/ci";
import { RiCellphoneLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import resumeJson from "@/assets/json/resume.json";
import { useSetAtom } from "jotai";
import ContactInfoDisplay from "@/components/ContactInfoDisplay/ContactInfoDisplay";
import IconLink from "@/components/IconLink/IconLink";
import { modalConfigAtom } from "@/components/Modal/store";

const Social = () => {
  const setModalConfig = useSetAtom(modalConfigAtom);

  const handleContactItemClick = (title: string, text: string) => {
    setModalConfig({
      showTitle: true,
      showCloseButton: true,
      closeOnClickOutside: true,
      semiOpaqueBackground: true,
      items: [
        {
          component: ContactInfoDisplay,
          commonModalProps: {
            title,
          },
          componentProps: Object.fromEntries([["text", text]]),
        },
      ],
      buttonGroups: new Map(),
      show: true,
    });
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
    </div>
  );
};

export default Social;
