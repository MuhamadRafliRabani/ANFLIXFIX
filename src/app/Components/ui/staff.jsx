import Guide from "../guide/guide";
import Card from "./cardAnime";

const staff = ({ staff }) => {
  return (
    <div>
      <h3 className="-mt-2 pb-2 text-xl font-semibold text-white">Staff</h3>
      <div className="relative w-full overflow-hidden">
        <Guide message="← Slide →" />
        <div className="scrollbar-hide flex w-full gap-4 overflow-auto">
          {staff?.length != 0 ? (
            staff?.map((item, i) => (
              <div
                key={i}
                className="relative w-[113px] min-w-0 flex-shrink-0 flex-grow-0 md:w-[140px]"
              >
                <Card
                  idAnime={item.mal_id}
                  image={item?.person?.images?.jpg.image_url}
                  title={item?.person.name}
                  year={item.positions[0]}
                  url={item?.person.url}
                />
              </div>
            ))
          ) : (
            <h3 className="w-full pb-2 text-center tracking-wide text-white">
              Data Staffs Not Available
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default staff;
