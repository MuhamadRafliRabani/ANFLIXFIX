import { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg border border-gray-300">
      <button
        className="w-full px-4 py-3 text-left font-medium hover:bg-gray-300 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
      </button>
      <div
        className={`px-4 py-2 transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
      >
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
