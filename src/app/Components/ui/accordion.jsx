import { useState } from "react";
import FilterSelect from "./filterSelect";
import { CaretDown } from "@phosphor-icons/react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = ({ content }) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="overflow-hidden ps-28">
      <button
        className="w-11/12 border-b border-white py-1 text-left font-medium focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="flex items-center justify-between">
          {title} <CaretDown size={16} />
        </span>
      </button>
      <div
        className={`w-11/12 py-2 transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px]" : "max-h-0 overflow-hidden"}`}
      >
        <FilterSelect filterArray={content} />
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium">Filter By</h3>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
