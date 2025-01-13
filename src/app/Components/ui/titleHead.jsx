import React from "react";

const TitleHead = ({ header, icon }) => {
  return (
    <h3 className="border-slide flex w-fit items-center ps-4 text-xl font-bold tracking-wide text-white hover:border-yellow-400 hover:text-yellow-400 md:ps-0">
      {header} <span className="ms-2">{icon}</span>
    </h3>
  );
};

export default TitleHead;
