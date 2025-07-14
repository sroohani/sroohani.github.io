import classes from "./Modal.module.css";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  modalButtonGroupsAtom,
  modalItemsAtom,
  semiOpaqueBackgroundAtom,
  showModalAtom,
} from "./store";
import { createElement, useEffect, useRef, useState } from "react";
// import { type ModalCommand } from "./types";
import { CircleX } from "lucide-react";
import { useOutsideCloseCommand } from "@/hooks/use-outside-close-command";
import Button from "@/components/Button/Button";

const Modal = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const setShowModal = useSetAtom(showModalAtom);
  const [semiOpaqueBackground, setSemiOpaqueBackground] = useAtom(
    semiOpaqueBackgroundAtom
  );
  const modalButtonGroups = useAtomValue(modalButtonGroupsAtom);
  const modalComponents = useAtomValue(modalItemsAtom);
  // const [modalStep, setModalStep] = useState(0);
  const [modalStep] = useState(0);

  // const [modalCommand, setModalCommand] = useState<ModalCommand>("");

  // const classNames = (className: string) => {
  //   const parts = className.split(" ");
  //   return parts.map((name) => classes[name]).join(" ");
  // };

  // const resetCommand = () => {
  //   setModalCommand("");
  // };

  // const moveOn = () => setModalStep((prev) => prev + 1);

  const initiateClosing = () => {
    frameRef.current?.classList.add("about-to-unmount");
    setTimeout(() => setShowModal(false), 500);
  };

  const frameRef = useOutsideCloseCommand(() => {
    initiateClosing();
  });

  useEffect(() => {
    if (overlayRef.current) {
      if (semiOpaqueBackground) {
        overlayRef.current.classList.add("semi-opaque");
      } else {
        overlayRef.current.classList.remove("semi-opaque");
      }
    }

    return () => {
      setSemiOpaqueBackground(true);
    };
  }, [semiOpaqueBackground, setSemiOpaqueBackground]);

  return (
    <div ref={overlayRef} className={classes.overlay}>
      <div ref={frameRef} className={classes.frame}>
        <div className={classes["title-bar"]}>
          {modalComponents.length && (
            <span className={classes.title}>
              {modalComponents[modalStep].commonModalProps.title}
            </span>
          )}
          <button
            className={classes["close-button"]}
            tabIndex={-1}
            title="Close"
            onClick={initiateClosing}
          >
            <CircleX className={classes["close-icon"]} />
          </button>
        </div>
        {modalComponents.length &&
          createElement(modalComponents[modalStep].component, {
            ...modalComponents[modalStep].commonModalProps,
            ...modalComponents[modalStep].componentProps,
          })}
        {modalButtonGroups.size > 0 && (
          <div className={classes["button-bar"]}>
            {Array.from(modalButtonGroups.entries()).map(([grpId, grp]) => (
              <div className={classes["button-group"]} key={grpId}>
                {grp.map((btn) => (
                  <Button
                    title={btn.text}
                    key={btn.id!}
                    // onClick={() => setModalCommand(btn.command || "")}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Modal;
