import Link from "next/link";

const IconFooter = ({ icon, url, label }) => {
  return (
    <Link
      href={url || ""}
      aria-label={label}
      className="rounded-md bg-white p-1 text-gray-400 shadow-md hover:text-white"
    >
      {icon}
    </Link>
  );
};

export default IconFooter;
