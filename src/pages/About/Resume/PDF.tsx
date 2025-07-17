import { Page, Text, View, Document } from "@react-pdf/renderer";
import { trimmedLinkText } from "./utils";
import styles from "./styles";
import resumeJson from "@/assets/json/resume.json";
import location from "@/assets/images/resume/map-pin.png";
import email from "@/assets/images/resume/mail.png";
import cellphone from "@/assets/images/resume/smartphone.png";
import website from "@/assets/images/resume/globe.png";
import github from "@/assets/images/resume/github.png";
import linkedin from "@/assets/images/resume/InBug-Black.png";
import { lazy } from "react";

const ContactItem = lazy(() => import("./ContactItem"));
const Skill = lazy(() => import("./Skill"));
const Experience = lazy(() => import("./Experience"));
const Language = lazy(() => import("./Language"));

const PDF = () => {
  return (
    <Document
      style={styles.document}
      title={`${resumeJson.header.name} - CV`}
      author={resumeJson.header.name}
      subject="Curriculum Vitae"
      keywords="Software developer;C;Modern C++;HTML;CSS;JavaScript;TypeScript;React;Next;Go;Python"
      language="en-US"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.name}>{resumeJson.header.name}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Software developer</Text>
        </View>
        <View style={styles.contact}>
          <ContactItem
            isLink={false}
            image={location}
            text={resumeJson.header.location}
          />
          <ContactItem
            isLink={false}
            image={email}
            text={resumeJson.header.email}
          />
          <ContactItem
            isLink={false}
            image={cellphone}
            text={resumeJson.header.cellphone}
          />
          <ContactItem
            isLink={true}
            href={resumeJson.header.website}
            text={trimmedLinkText(resumeJson.header.website)}
            image={website}
          />
          <ContactItem
            isLink={true}
            href={resumeJson.header.github}
            text={trimmedLinkText(resumeJson.header.github)}
            image={github}
          />
          <ContactItem
            isLink={true}
            href={resumeJson.header.linkedin}
            text={trimmedLinkText(resumeJson.header.linkedin)}
            image={linkedin}
          />
        </View>
        <Text style={styles.aboutMe}>{resumeJson.summary}</Text>
        <View style={styles.skillsSection}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {resumeJson.skills.map((skill, index) => (
            <Skill title={skill.title} skills={skill.skills} key={index} />
          ))}
        </View>
        <View style={styles.experienceSection}>
          <Text style={styles.sectionTitle}>Professional background</Text>
          {resumeJson.professional.map((item, index) => (
            <Experience {...item} key={index} />
          ))}
        </View>
        <View style={styles.academicSection}>
          <Text style={styles.sectionTitle}>Academic background</Text>
          <Text style={styles.academic}>{resumeJson.academic}</Text>
        </View>
        <View style={styles.languagesSection}>
          <Text style={styles.sectionTitle}>Languages</Text>
          {resumeJson.languages.map((language, index) => (
            <Language {...language} key={index} />
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
