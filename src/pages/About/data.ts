import type { Link } from "@/components/ContactList/types";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineMail } from "react-icons/md";
import { RiCellphoneLine } from "react-icons/ri";
import { CiLinkedin, CiLocationOn } from "react-icons/ci";
import { SiGithub } from "@icons-pack/react-simple-icons";
import resumeJson from "@/assets/json/resume.json";
import type { CreditProps } from "./Credit/Credit";
import solas from "@/assets/images/solas.png";
import noImage from "@/assets/images/no-image.jpg";
import loader from "@/assets/images/loader.png";
import logo from "@/assets/images/logo.jpeg";
import iran from "@/assets/images/Flag_of_Iran_simplified.svg";
import { type TabbarItemDef } from "@/components/Tabbar/types";
import { FileUser, User } from "lucide-react";
import { FaQuestion } from "react-icons/fa6";

export const aboutTabbarItems: TabbarItemDef[] = [
  {
    id: 0,
    title: "Resume",
    to: "/about/resume",
    icon: FileUser,
  },
  {
    id: 1,
    title: "Credits",
    to: "/about/credits",
    icon: User,
  },
  {
    id: 2,
    title: "FAQs",
    to: "/about/faqs",
    icon: FaQuestion,
  },
];

export const aboutTabbarName = "about";

export const contactInfo: Link[] = [
  {
    id: 0,
    icon: CiLocationOn,
    title: resumeJson.header.location,
    href: resumeJson.header.map,
  },
  {
    id: 1,
    icon: MdOutlineMail,
    title: "Email",
    withCopy: true,
    textToCopy: resumeJson.header.email,
  },
  {
    id: 2,
    icon: RiCellphoneLine,
    title: "Cell Phone",
    withCopy: true,
    textToCopy: resumeJson.header.cellphone,
  },
  {
    id: 3,
    icon: TfiWorld,
    title: "Website",
    href: resumeJson.header.website,
  },
  {
    id: 4,
    icon: SiGithub,
    title: "GitHub",
    href: resumeJson.header.github,
  },
  {
    id: 5,
    icon: CiLinkedin,
    title: "LinkedIn",
    href: resumeJson.header.linkedin,
  },
];

export const creditsInfo: CreditProps[] = [
  {
    id: 0,
    img: solas,
    title: "Solas",
    href: "https://chatgpt.com/",
  },
  {
    id: 1,
    img: noImage,
    title: "Photo by Markus Spiske from Pexels",
    href: "https://www.pexels.com/photo/codes-on-tilt-shift-lens-2004161/",
  },
  {
    id: 2,
    img: loader,
    title: "Loader by CSS Loaders",
    href: "https://css-loaders.com/",
  },
  {
    id: 3,
    img: "https://avatars.githubusercontent.com/u/66879934?s=200&v=4",
    title: "Lucide Icons",
    href: "https://lucide.dev/icons/",
  },
  {
    id: 4,
    img: "https://avatars.githubusercontent.com/u/29872746?s=200&v=4",
    title: "Simple Icons",
    href: "https://simpleicons.org/",
  },
  {
    id: 5,
    img: "https://avatars.githubusercontent.com/u/39895671?s=200&v=4",
    title: "React Icons",
    href: "https://react-icons.github.io/react-icons/",
  },
  {
    id: 6,
    img: logo,
    title: "Logo by Microsoft Designer AI",
    href: "https://create.microsoft.com/en-us/features/ai-image-generator",
  },
  {
    id: 7,
    img: iran,
    title: "Flag of Iran",
    href: "https://flagofiran.com/",
  },
];
