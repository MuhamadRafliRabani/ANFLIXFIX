import { useState, useEffect } from "react";

const Guide = ({
  message,
  duration = 3000,
  position = "bottom-0 left-0 right-0",
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      className={`absolute ${position} z-50 flex items-center justify-center bg-black/50 p-2`}
    >
      <p className="animate-fadeInOut text-sm font-bold text-white">
        {message}
      </p>
    </div>
  );
};

export default Guide;
