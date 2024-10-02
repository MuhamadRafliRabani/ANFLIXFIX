import { usePath, useType } from "@/utility/store/store";
import { useSetDataAnime } from "@/utility/SwitchType";
import { TrendUp } from "@phosphor-icons/react";
import { useEffect } from "react";

const Btn = ({ Type }) => {
  const { setPath } = usePath();
  const { setType, type } = useType();

  useEffect(() => {
    useSetDataAnime(type, setPath, setType);
  }, [type]);

  return (
    <button
      className="main-transition p-0 text-base effect-btn flex gap-1 items-center justify-center my-0 py-4 w-full "
      onClick={() => useSetDataAnime(Type, setPath, setType)}
    >
      <TrendUp className={`${type === Type ? "text-primary md:text-xl font-bold " : "text-white font-semibold"}`} />
      <p className={`${type === Type ? "text-primary md:text-xl font-bold " : "text-white font-semibold"}`}>{Type}</p>
    </button>
  );
};

export default Btn;
