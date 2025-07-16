import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import classes from "./ContactForm.module.css";
import ContactType from "./ContactType";
import Button from "@/components/Button/Button";
import { z } from "zod";
import { Client, ExecutionMethod, Functions } from "appwrite";
import { useAtom } from "jotai";
import { modalConfigAtom } from "@/components/Modal/store";
import Loader from "@/components/Loader/Loader";

const ContactForm = () => {
  const messageRef = useRef<HTMLLabelElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const client = useMemo(() => new Client(), []);
  const functions = new Functions(client);
  const [modalConfig, setModalConfig] = useAtom(modalConfigAtom);

  const sendMessage = async (body: string) => {
    try {
      await functions.createExecution(
        "68767f7c00123d05d509",
        body,
        false,
        "/",
        ExecutionMethod.POST,
        { "Content-Type": "application/json" }
      );
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(`Error: ${error}`);
      }
    }
  };

  useEffect(() => {
    client
      .setEndpoint("https://fra.cloud.appwrite.io/v1")
      .setProject("6876469be903bc157a8f");
  }, [client]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModalConfig({
      showTitle: false,
      showCloseButton: false,
      closeOnClickOutside: false,
      semiOpaqueBackground: true,
      items: [
        {
          component: Loader,
          commonModalProps: {
            title: "Sending...",
          },
        },
      ],
      buttonGroups: new Map(),
      show: true,
    });

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
        message: z.string().min(4).max(512),
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

    sendMessage(
      JSON.stringify({
        name: `${result.data.name}`,
        subject: `${result.data.subject}`,
        contact: `${result.data.contact}`,
        email: `${result.data.email}`,
        whatsapp: `${result.data.whatsapp}`,
        message: `${result.data.message}`,
      })
    );

    setNameValue("");
    setSubjectValue("");
    setMessageValue("");
    formRef.current!.reset();
    setModalConfig({ ...modalConfig, show: false });
  };

  const [nameValue, setNameValue] = useState("");
  const nameRef = useRef<HTMLSpanElement>(null);
  const maxNameLength = 128;
  const [subjectValue, setSubjectValue] = useState("");
  const subjectRef = useRef<HTMLSpanElement>(null);
  const maxSubjectLength = 256;
  const [messageValue, setMessageValue] = useState("");
  const messageBodyRef = useRef<HTMLSpanElement>(null);
  const maxMessageLength = 512;

  const handleTextFieldChange = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    ref: React.RefObject<HTMLSpanElement | null>,
    maxLength: number
  ) => {
    if (value.length <= maxLength) {
      setState(value);
      if (ref.current) {
        ref.current.textContent = `${value.length}/${maxLength}`;
      }
    }
  };

  return (
    <div className={classes.message}>
      <p className={classes.required}>
        Fields marked with <span className={classes["required-mark"]}>*</span>{" "}
        are required
      </p>
      <form
        className={classes.form}
        ref={formRef}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={classes["form-element-container"]}>
          <label className={classes["form-label"]} htmlFor="name">
            <input
              className="contact"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={nameValue}
              onChange={(e) =>
                handleTextFieldChange(
                  e.target.value,
                  setNameValue,
                  nameRef,
                  maxNameLength
                )
              }
            />
            <span className={classes["floating-span"]}>Name</span>
          </label>
          <span ref={nameRef} className={classes.counter}>
            0/{maxNameLength}
          </span>
        </div>
        <div className={classes["form-element-container"]}>
          <label className={classes["form-label"]} htmlFor="subject">
            <input
              className="contact"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={subjectValue}
              onChange={(e) =>
                handleTextFieldChange(
                  e.target.value,
                  setSubjectValue,
                  subjectRef,
                  maxSubjectLength
                )
              }
              required
            />
            <span className={classes["floating-span"]}>Subject</span>
            <span className={classes["required-mark"]}>*</span>
          </label>
          <span ref={subjectRef} className={classes.counter}>
            0/{maxSubjectLength}
          </span>
        </div>
        <ContactType />
        <div className={classes["form-element-container"]}>
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
              value={messageValue}
              onChange={(e) =>
                handleTextFieldChange(
                  e.target.value,
                  setMessageValue,
                  messageBodyRef,
                  maxMessageLength
                )
              }
              required
            ></textarea>
            <span className={classes["floating-span"]}>Message</span>
            <span className={classes["required-mark"]}>*</span>
          </label>
          <span ref={messageBodyRef} className={classes.counter}>
            0/{maxMessageLength}
          </span>
        </div>
        <Button title="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
