import { CaretDown, Check } from "@phosphor-icons/react/dist/ssr";
import Guide from "../guide/guide";

const FilterInput = ({ options, onChange, selectedValue }) => {
  return (
    <details
      className="overflow-without-scroll max-h-32 overflow-auto border-b border-e border-white pe-2 shadow-sm md:min-w-max"
      open
    >
      <summary className="flex items-center justify-between text-white">
        {options.name}
        <span>
          <CaretDown size={20} />
        </span>
      </summary>
      <div className="relative grid grid-cols-3 gap-2 p-2">
        {options.content.map((option) => (
          <div
            key={option.value}
            className="group relative max-w-28 space-x-2 overflow-hidden whitespace-nowrap text-white/50 md:max-w-32"
          >
            <input
              type="radio"
              name={options.name} // Membuat setiap kategori memiliki name unik
              id={`${options.name}-${option.label}`}
              value={option.value}
              onChange={() => onChange(options.name, option.value)}
              className="peer relative size-4 appearance-none rounded-sm border-[1.5px] border-white bg-transparent shadow-sm checked:bg-white"
            />
            <Check
              size={16}
              weight="bold"
              className="absolute -left-[0.5rem] top-[0.1rem] transform text-black opacity-0 peer-checked:opacity-100"
            />
            <label
              htmlFor={`${options.name}-${option.label}`}
              className="ml-6 cursor-pointer"
            >
              {option.label}
            </label>
          </div>
        ))}
        <Guide
          message="↑ scroll ↓"
          duration={5000}
          position="top-16 inset-x-0"
        />
      </div>
    </details>
  );
};

export default FilterInput;
