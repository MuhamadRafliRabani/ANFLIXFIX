import React from "react";
import Nav from "../Child-Comp/Nav";
import { TrendUp } from "@phosphor-icons/react";

const Btn = ({ text, type, getType, stylePicked }) => {
  return (
    <button
      className={`main-transition p-0 text-base ${
        stylePicked === type
          ? "text-[#E50914] md:text-xl font-bold effect-btn"
          : "text-slate-300 font-semibold"
      }`}
      onClick={(e) => getType("Trend Up", e)}
    >
      <Nav icon={<TrendUp size={20} />} text={text} />
    </button>
  );
};

export default Btn;
