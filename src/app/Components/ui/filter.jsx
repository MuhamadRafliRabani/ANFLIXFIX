import Accordion from "./accordion";

const accordionItems = [
  {
    title: "Year",
    content: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
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

const Filter = () => {
  return (
    <div className="rounded-lg p-4">
      <Accordion items={accordionItems} />
    </div>
  );
};

export default Filter;
