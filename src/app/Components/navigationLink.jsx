import Link from "next/link";
import Button from "../ui/button";
import { listNav } from "@/data/listNav";

const NavigationLink = ({ open, setisopen }) => {
  return (
    <div
      className={`fixed top-[99.75%] z-[100] flex min-h-svh w-1/2 flex-shrink-0 flex-col gap-3 rounded-tl-md bg-primary_color pt-4 font-medium transition-all duration-300 md:static md:min-h-fit md:w-[30%] md:flex-row md:justify-between md:gap-0 md:bg-transparent md:pt-0 ${open ? "right-0" : "-right-full"}`}
    >
      {listNav.map((item, i) => (
        <Link
          key={i}
          href={item.url}
          className="border-slide flex w-full items-center gap-2 border-b-[0.1px] duration-300 hover:border-none hover:text-yellow-400 md:w-fit md:border-none"
        >
          <span className="md:hidden">{item.icon}</span> {item.name}
        </Link>
      ))}

      <Button
        action={() => setisopen()}
        text="close"
        width="w-11/12 ms-1.5 mt-[450px] md:hidden"
      />
    </div>
  );
};

export default NavigationLink;
