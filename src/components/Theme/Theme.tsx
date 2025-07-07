import { Check } from "lucide-react";
import classes from "./Theme.module.css";

interface Props {
  text: string;
  name: string;
  required?: boolean;
  checked: boolean;
  theme?: string;
  onChange?: () => void;
  focus?: boolean;
}

const Theme = ({
  text,
  name,
  required,
  checked,
  theme,
  onChange,
  focus,
}: Props) => {
  return (
    <div className={`${theme} ${classes.container}`}>
      <div className={`${theme} ${classes.theme}`}>
        <span className={classes.text}>{text}</span>
        {checked && <Check className={classes.check} />}
        <input
          type="radio"
          className={classes["radio-button"]}
          value={theme}
          name={name}
          required={required}
          checked={checked}
          onChange={onChange}
          autoFocus={focus}
        />
      </div>
      <div className={`${theme} ${classes.underline}`}></div>
    </div>
  );
};

export default Theme;
