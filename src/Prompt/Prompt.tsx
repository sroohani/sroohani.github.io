import { useAtomValue } from "jotai";
import { promptPathAtom } from "./store";
import classes from "./Prompt.module.css";

interface Props {
  prompt?: string;
  cursor?: string;
}

const Prompt = ({ prompt, cursor }: Props) => {
  const path = useAtomValue(promptPathAtom);

  return (
    <div className={classes.prompt}>
      <span>
        [{prompt} {path} ] $
      </span>
      <span className={classes.cursor}> {cursor}</span>
    </div>
  );
};

export default Prompt;
