import classes from "./Modal.module.css";
import { useAtom } from "jotai";
import { modalConfigAtom } from "./store";
import { createElement, useEffect, useRef, useState } from "react";
// import { type ModalCommand } from "./types";
import { CircleX } from "lucide-react";
import { useOutsideCloseCommand } from "@/hooks/use-outside-close-command";
import Button from "@/components/Button/Button";

const Modal = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [modalConfig, setModalConfig] = useAtom(modalConfigAtom);
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
    setTimeout(() => setModalConfig({ ...modalConfig, show: false }), 500);
  };

  const frameRef = useOutsideCloseCommand(() => {
    if (modalConfig.closeOnClickOutside) {
      initiateClosing();
    }
  });

  useEffect(() => {
    if (overlayRef.current) {
      if (modalConfig.semiOpaqueBackground) {
        overlayRef.current.classList.add("semi-opaque");
      } else {
        overlayRef.current.classList.remove("semi-opaque");
      }
    }

    return () => {
      setModalConfig({
        ...modalConfig,
        semiOpaqueBackground: true,
        show: false,
      });
    };
  }, [modalConfig, setModalConfig]);

  return (
    <div ref={overlayRef} className={classes.overlay}>
      <div ref={frameRef} className={classes.frame}>
        {modalConfig.showTitle && (
          <div className={classes["title-bar"]}>
            {modalConfig.items.length && (
              <span className={classes.title}>
                {modalConfig.items[modalStep].commonModalProps.title}
              </span>
            )}
            {modalConfig.showCloseButton && (
              <button
                className={classes["close-button"]}
                tabIndex={-1}
                title="Close"
                onClick={initiateClosing}
              >
                <CircleX className={classes["close-icon"]} />
              </button>
            )}
          </div>
        )}
        {modalConfig.items.length &&
          createElement(modalConfig.items[modalStep].component, {
            ...modalConfig.items[modalStep].commonModalProps,
            ...modalConfig.items[modalStep].componentProps,
          })}
        {modalConfig.buttonGroups.size > 0 && (
          <div className={classes["button-bar"]}>
            {Array.from(modalConfig.buttonGroups.entries()).map(
              ([grpId, grp]) => (
                <div className={classes["button-group"]} key={grpId}>
                  {grp.map((btn) => (
                    <Button
                      title={btn.text}
                      key={btn.id!}
                      // onClick={() => setModalCommand(btn.command || "")}
                    />
                  ))}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Modal;
