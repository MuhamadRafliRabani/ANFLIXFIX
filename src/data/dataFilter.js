export const Filters = [
  {
    Name: "Genres",
    content: [
      { label: "None", value: "" },
      { label: "Action", value: 1 },
      { label: "Adventure", value: 2 },
      { label: "Comedy", value: 4 },
      { label: "Drama", value: 8 },
      { label: "Ecchi", value: 9 },
      { label: "Fantasy", value: 10 },
      { label: "Mystery", value: 7 },
      { label: "Sci-Fi", value: 24 },
      { label: "Sports", value: 30 },
      { label: "Supernatural", value: 37 },
      { label: "Suspense", value: 41 },
      // Genres tambahan
      { label: "Horror", value: 14 },
      { label: "Slice of Life", value: 36 },
      { label: "Romance", value: 22 },
      { label: "Thriller", value: 45 },
    ],
  },
  {
    Name: "Season",
    content: [
      { label: "None", value: "" },
      { label: "Winter", value: "winter" },
      { label: "Spring", value: "spring" },
      { label: "Fall", value: "fall" },
      { label: "Summer", value: "summer" },
      { label: "All-Times", value: "" },
    ],
  },
  {
    Name: "Rating",
    content: [
      { label: "None", value: "" },
      { label: "G - All Ages", value: "g" },
      { label: "PG - Children", value: "pg" },
      { label: "PG-13 - Teens 13", value: "pg13" },
      { label: "R - 17+", value: "r17" },
      { label: "R+ - Mild Nudity", value: "r" },
    ],
  },
  {
    Name: "Type",
    content: [
      { label: "None", value: "" },
      { label: "TV", value: "tv" },
      { label: "Movie", value: "movie" },
      { label: "OVA", value: "ova" },
      { label: "ONA", value: "ona" },
      { label: "Special", value: "special" },
      { label: "Music", value: "music" },
    ],
  },
  {
    Name: "Status",
    content: [
      { label: "None", value: "" },
      { label: "Airing", value: "airing" },
      { label: "Complete", value: "complete" },
      { label: "Upcoming", value: "upcoming" },
    ],
  },
  {
    Name: "Order_by",
    content: [
      { label: "None", value: "" },
      { label: "Score", value: "score" },
      { label: "Popularity", value: "popularity" },
      { label: "Members", value: "members" },
      { label: "Favorites", value: "favorites" },
      { label: "Title", value: "title" },
      { label: "Type", value: "type" },
      { label: "Episodes", value: "episodes" },
      { label: "Start Date", value: "start_date" },
      { label: "End Date", value: "end_date" },
    ],
  },
  {
    Name: "Sort",
    content: [
      { label: "None", value: "" },
      { label: "Descending", value: "desc" },
      { label: "Ascending", value: "asc" },
    ],
  },
  {
    Name: "Year",
    content: [
      { label: "None", value: "" },
      // Tambahkan tahun spesifik jika diperlukan
      { label: "2024", value: "2024" },
      { label: "2023", value: "2023" },
      { label: "2022", value: "2022" },
      { label: "2021", value: "2021" },
      { label: "2020", value: "2020" },
    ],
  },
];
