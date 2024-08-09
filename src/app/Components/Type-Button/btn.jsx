import { usePath, useType } from "@/utility/store/store";
import { useSetDataAnime } from "@/utility/SwitchType";
import { TrendUp } from "@phosphor-icons/react";
import { useEffect } from "react";

const Btn = ({ Type }) => {
  const { setPath } = usePath();
  const { setType, type } = useType();

  useEffect(() => {
    useSetDataAnime(Type, setPath, setType);
  }, [Type]);

  return (
    <button
      className={`main-transition p-0 text-base effect-btn flex gap-1 items-center justify-center my-0 py-4 ${type === Type ? "text-primary md:text-xl font-bold " : "text-slate-300 font-semibold"}`}
      onClick={() => useSetDataAnime(Type, setPath, setType)}
    >
      <TrendUp />
      <p className="">{Type}</p>
    </button>
  );
};

export default Btn;
