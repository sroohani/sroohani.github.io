import { faqs } from "./data";
import CollapsibleCard from "@/components/CollapsibleCard/CollapsibleCard";

const FAQs = () => {
  return (
    <>
      {faqs.map((faq) => (
        <CollapsibleCard
          title={faq.question}
          normalTitleFont={true}
          key={faq.id}
        >
          <p>{faq.answer}</p>
        </CollapsibleCard>
      ))}
    </>
  );
};

export default FAQs;
