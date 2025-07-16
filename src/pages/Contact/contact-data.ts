import type { Link } from "@/components/ContactList/types";
import { MdOutlineMail } from "react-icons/md";
import { RiCellphoneLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "@icons-pack/react-simple-icons";
import resumeJson from "@/assets/json/resume.json";

export const links: Link[] = [
  {
    id: 0,
    icon: SiGithub,
    title: "GitHub",
    href: resumeJson.header.github,
  },
  {
    id: 1,
    icon: CiLinkedin,
    title: "LinkedIn",
    href: resumeJson.header.linkedin,
  },
  {
    id: 2,
    icon: MdOutlineMail,
    title: "Email",
    withCopy: true,
    textToCopy: resumeJson.header.email,
  },
  {
    id: 3,
    icon: RiCellphoneLine,
    title: "Cell Phone",
    withCopy: true,
    textToCopy: resumeJson.header.cellphone,
  },
];
