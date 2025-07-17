import classes from "./Resume.module.css";
import resumeJson from "@/assets/json/resume.json";
import { Download } from "lucide-react";
import { contactInfo } from "../data";
import ContactList from "@/components/ContactList/ContactList";
import CollapsibleCard from "@/components/CollapsibleCard/CollapsibleCard";
import JobExperience from "../JobExperience/JobExperience";
import Language from "../Language/Language";
import { PDFDownloadLink, Font } from "@react-pdf/renderer";
import PDF from "./PDF";
import { useEffect } from "react";
import { Buffer } from "buffer";

const Header = () => {
  useEffect(() => {
    Font.register({ family: "Helvetica", src: "" });
    window.Buffer = window.Buffer || Buffer;
  }, []);

  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <h3>{resumeJson.header.name}</h3>
        <PDFDownloadLink
          document={<PDF />}
          fileName={`${resumeJson.header.name} - CV.pdf`}
        >
          {
            (/*{ blob, url, loading, error }*/) => (
              <span className={classes.download} title="Download PDF">
                <Download />
              </span>
            )
          }
        </PDFDownloadLink>
      </div>
      <hr className={classes.hr} />
      <ContactList links={contactInfo} />
    </div>
  );
};

const Summary = () => {
  return <p className={classes.summary}>{resumeJson.summary}</p>;
};

const Resume = () => {
  return (
    <div className={classes.frame}>
      <Header />
      <hr className={classes.hr} />
      <Summary />
      <hr className={classes.hr} />
      <CollapsibleCard title="Skills">
        <div className={classes.skills}>
          {Object.entries(resumeJson.skills).map((entry, index) => (
            <div className={classes["skill-row-container"]} key={index}>
              <div className={classes["skill-row"]}>
                <div className={classes["skill-title"]}>
                  {entry[1]["title"]}
                </div>
                <div className={classes["joint-skills"]}>
                  {entry[1].skills.join(", ")}
                </div>
              </div>
              <div className={classes.underline}></div>
            </div>
          ))}
        </div>
      </CollapsibleCard>
      <CollapsibleCard title="Professional background">
        {Object.entries(resumeJson.professional).map((entry, index) => (
          <JobExperience {...entry[1]} key={index} />
        ))}
      </CollapsibleCard>
      <CollapsibleCard title="Academic background">
        {resumeJson.academic}
      </CollapsibleCard>
      <CollapsibleCard title="Languages">
        {Object.entries(resumeJson.languages).map((entry, index) => (
          <Language {...entry[1]} key={index} />
        ))}
      </CollapsibleCard>
    </div>
  );
};

export default Resume;
