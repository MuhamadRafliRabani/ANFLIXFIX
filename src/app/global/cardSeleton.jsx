import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardSkeleton = ({ cards }) => {
  return (
    <section className="grid grid-cols-3 grid-rows-3 md:grid-cols-6 w-svw h-fit gap-4 ps-2 pe-2 md:pe-8">
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="w-fit h-fit flex flex-col justify-center items-center">
            <div className="rounded-md">{<Skeleton count={1} width={200} height={250} />}</div>
            <p className="text-start">{<Skeleton width={200} height={18} count={2} />}</p>
          </div>
        ))}
    </section>
  );
};

export default CardSkeleton;
