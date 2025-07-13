import { useEffect, useRef } from "react";
import classes from "./ContactInfoModal.module.css";
import { useOutsideCloseCommand } from "@/hooks/use-outside-close-command";
import { useSetAtom } from "jotai";
import { showContactInfoModalAtom } from "./store";

interface Props {
  title: string;
  text: string;
}

const ContactInfoModal = ({ title, text }: Props) => {
  const textRef = useRef<HTMLInputElement>(null);
  const setShowContactInfoModal = useSetAtom(showContactInfoModalAtom);
  const panelRef = useOutsideCloseCommand(() => {
    panelRef.current?.classList.add("about-to-unmount");
    setTimeout(() => setShowContactInfoModal(false), 500);
  });

  useEffect(() => {
    if (textRef.current) {
      textRef.current.select();
    }
  }, []);

  return (
    <div className={classes.overlay}>
      <div ref={panelRef} className={classes.panel}>
        <div className={classes.title}>{title}</div>
        <hr className={classes.hr} />
        <input
          ref={textRef}
          className={classes.text}
          type="text"
          readOnly
          value={text}
        />
      </div>
    </div>
  );
};

export default ContactInfoModal;
