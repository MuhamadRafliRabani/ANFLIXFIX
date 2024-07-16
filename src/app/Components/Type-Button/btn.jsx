import { usePath, useType } from "@/utility/global_state/Collection_State";
import { setDataAnime } from "@/utility/SwitchType";
import { TrendUp } from "@phosphor-icons/react";
import { useEffect } from "react";

const Btn = ({ Type }) => {
  const { setPath } = usePath();
  const { setType, type } = useType();

  useEffect(() => {
    setDataAnime(Type, setPath, setType);
  }, [Type]);

  return (
    <button
      className={`main-transition p-0 text-base effect-btn flex gap-1 items-center justify-center my-0 py-4 ${
        type === Type
          ? "text-primary md:text-xl font-bold "
          : "text-slate-300 font-semibold"
      }`}
      onClick={() => setDataAnime(Type, setPath, setType)}
    >
      <TrendUp />
      <p className="">{Type}</p>
    </button>
  );
};

export default Btn;
