import Accordion from "./accordion";

const accordionItems = [
  {
    title: "Season",
    content: ["Winter", "Spring", "fall", "Summer", "All-times"],
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
      "PG-13 - Teens 13",
      "R - 17+ ",
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
      className={`fixed right-1/2 z-40 h-fit w-3/4 translate-x-1/2 rounded-lg bg-primary_color p-4 transition-all duration-300 md:static md:right-0 md:h-3/4 md:w-[12%] md:translate-x-0 md:rounded-none md:bg-transparent md:pt-0 ${isOpen ? "top-0" : "-top-full"}`}
    >
      <Accordion items={accordionItems} handleOpen={handleOpen} />
    </div>
  );
};

export default Filter;
