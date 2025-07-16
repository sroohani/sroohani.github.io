import classes from "./ContactList.module.css";
import type { Link } from "./types";
import IconLink from "@/components/IconLink/IconLink";
import { useContactItemClickHandler } from "./utils";

interface Props {
  links: Link[];
}

const ContactList = ({ links }: Props) => {
  const handleContactItemClick = useContactItemClickHandler();

  return (
    <div className={classes.contact}>
      {links.map((link) => (
        <IconLink
          {...link}
          copyFallback={
            link.withCopy
              ? () =>
                  handleContactItemClick(
                    link.title ?? "",
                    link.textToCopy ?? ""
                  )
              : () => {}
          }
          key={link.id}
        />
      ))}
    </div>
  );
};

export default ContactList;
