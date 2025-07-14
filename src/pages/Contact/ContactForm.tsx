import { useRef, type FormEvent } from "react";
import classes from "./ContactForm.module.css";
import ContactType from "./ContactType";
import Button from "@/components/Button/Button";
import { z } from "zod";

const ContactForm = () => {
  const messageRef = useRef<HTMLLabelElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(formRef.current!));
    const formSchema = z
      .object({
        name: z.string().optional(),
        subject: z.string().optional(),
        contact: z.union([
          z.literal(""),
          z.literal("email"),
          z.literal("whatsapp"),
        ]),
        email: z.string().email().optional(),
        whatsapp: z.string().optional(),
      })
      .refine((schema) => {
        return (
          (schema.contact === "email" && schema.email !== undefined) ||
          (schema.contact === "whatsapp" &&
            schema.whatsapp !== undefined &&
            schema.whatsapp.length > 0) ||
          schema.contact === ""
        );
      });

    const result = formSchema.safeParse(formData);
    if (result.error) {
      alert("Please properly fill out the form");
      return;
    }

    formRef.current!.reset();
  };

  return (
    <div className={classes.message}>
      <form
        className={classes.form}
        ref={formRef}
        onSubmit={(e) => handleSubmit(e)}
      >
        <label className={classes["form-label"]} htmlFor="name">
          <input
            className="contact"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <span className={classes["floating-span"]}>Name</span>
        </label>
        <label className={classes["form-label"]} htmlFor="subject">
          <input
            className="contact"
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
          />
          <span className={classes["floating-span"]}>Subject</span>
        </label>
        <ContactType />
        <label
          ref={messageRef}
          className={classes["form-label"]}
          htmlFor="message"
        >
          <textarea
            id="message"
            name="message"
            rows={5}
            cols={33}
            placeholder="Message"
          ></textarea>
          <span className={classes["floating-span"]}>Message</span>
        </label>
        <Button title="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
