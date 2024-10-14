"use client";
const Button = ({ action, width, height, text, style__ }) => {
  return (
    <button
      onClick={action}
      className={` ${width} ${height} bg-second_color rounded-lg py-2 ${style__}`}
    >
      <p className="text-sm font-semibold text-black">{text}</p>
    </button>
  );
};

export default Button;
