import Accordion from "./accordion";

const accordionItems = [
  { title: "Is it accessible?", content: "Yes, it's accessible to everyone!" },
  { title: "Is it styled?", content: "Yes, it's styled with Tailwind CSS." },
  {
    title: "Is it animated?",
    content: "No, but you can easily add transitions if you want.",
  },
];

const Filter = () => {
  return (
    <div className="rounded-lg bg-gray-800 p-4">
      <div className="flex flex-wrap justify-center gap-4 font-medium text-white">
        {/* Filter by Year */}
        <div className="h-fit w-full">
          <h4 className="">Tahun</h4>
          <select className="flex-1 rounded-lg bg-gray-700 px-4 py-2 text-white">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        {/* Filter by Season */}
        <select className="rounded-lg bg-gray-700 px-4 py-2 text-white">
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
        </select>

        {/* Filter by Genres */}
        <div className="flex flex-col gap-2">
          <label className="text-white">Genres:</label>
          <div className="flex flex-wrap gap-2">
            {["Action", "Comedy", "Drama", "Adventure"].map((genre) => (
              <label key={genre} className="text-white">
                {genre} <input type="checkbox" />
              </label>
            ))}
          </div>
        </div>
      </div>{" "}
      <Accordion items={accordionItems} />
    </div>
  );
};

export default Filter;
