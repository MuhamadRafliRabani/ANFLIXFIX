"use client";
import { useEffect, useState } from "react";
import FilterSelect from "./filterSelect";
import { CaretDown, CaretUp, X } from "@phosphor-icons/react";
import Button from "./button";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [items, setItems] = useState();
  const [viewMore, setviewMore] = useState(4);

  useEffect(() => {
    if (content && content.length > viewMore) {
      setItems(content.splice(0, viewMore));
    }
  }, [content]);

  console.log("🚀 ~ AccordionItem ~ items:", items);
  // const toggleViewMore = ({ content }) => {
  //   setviewMore(filterArray.length);
  // };

  const toggleAccordion = ({ content }) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <button
        className="w-full border-b border-neutral-500 py-1 text-left font-medium focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="flex items-center justify-between md:text-base">
          {title} {isOpen ? <CaretUp size={16} /> : <CaretDown size={16} />}
        </span>
      </button>
      <div
        className={`mt-1 transition-all duration-700 ease-in-out ${isOpen ? "max-h-fit" : "max-h-0 overflow-hidden"}`}
      >
        <FilterSelect filterArray={content} />
        <button className="text-primary flex items-center justify-center gap-1 text-sm">
          Sort by <CaretDown size={16} />
        </button>
      </div>
    </div>
  );
};

const Accordion = ({ items, handleOpen }) => {
  return (
    <div className="w-full space-y-4 bg-purple-400">
      <div className="flex items-center justify-between md:hidden">
        <h3 className="text-xl font-medium">Filter By</h3>
        <Button icon={<X size={22} />} black action={handleOpen} />
      </div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
