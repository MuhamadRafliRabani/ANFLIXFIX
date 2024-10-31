import Accordion from "./accordion";

const accordionItems = [
  {
    title: "Season",
    content: ["Winter", "Spring", "fall", "Summer"],
  },
  {
    title: "Genres",
    content: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Mystery",
      "Romance",
      "Sci-Fi",
      "Slice of Life",
      "Sports",
      "Supernatural",
    ],
  },
  {
    title: "Rating",
    content: [
      "G - All Ages",
      "PG - Children",
      "PG-13 - Teens 13 or older",
      "R - 17+ (Violence & Profanity)",
      "R+ - Mild Nudity",
    ],
  },
  {
    title: "Type",
    content: ["TV", "Movie", "OVA", "ONA", "Special", "Music"],
  },
];

const Filter = ({ handleOpen, isOpen }) => {
  console.log("🚀 ~ Filter ~ isOpen:", isOpen);
  return (
    <div
      className={`fixed right-1/2 z-40 h-fit bg-primary_color w-3/4 translate-x-1/2 rounded-lg border-neutral-400 p-4 transition-all duration-300 md:static md:right-0 md:h-3/4 md:w-[15%] md:translate-x-0 md:rounded-none md:border-e md:bg-transparent md:pt-0 ${isOpen ? "top-0" : "-top-full"}`}
    >
      <Accordion items={accordionItems} handleOpen={handleOpen} />
    </div>
  );
};

export default Filter;
