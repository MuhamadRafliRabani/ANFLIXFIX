import React from "react";

const FilterInput = ({ option, onChange, selectedValue }) => {
  return (
    <div className="w-full space-y-2">
      <h3 className="text-text_color">{option.Name}</h3>
      <select
        value={selectedValue || ""}
        onChange={(e) => onChange(option.Name, e.target.value)}
        className="w-full rounded-md bg-second_color p-2"
      >
        {option.content.map((item, i) => (
          <option value={item.value} key={i}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterInput;
