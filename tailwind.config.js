/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-form1": "url('/public/bg-form1.jpg')",
      },
    },
  },
  plugins: [],
};

// case "Adventure":
//         setDataMain(data?.data?.filter((anime) => anime.genres.some((genre) => genre.name === "Adventure")));
//         setTitleMain("Anime Adventure");
//         setData(data);
//         break;
//       case "Drama":
//         setDataMain(data?.data?.filter((anime) => anime.genres.some((genre) => genre.name === "Drama")));
//         setTitleMain("Anime Drama");
//         setData(data);
//         break;
//       case "Fantasy":
//         setDataMain(data?.data?.filter((anime) => anime.genres.some((genre) => genre.name === "Fantasy")));
//         setTitleMain("Anime Fantasy");
//         setData(data);
//         break;
//       case "Action":
//         setDataMain(data?.data?.filter((anime) => anime.genres.some((genre) => genre.name === "Action")));
//         setTitleMain("Anime Adventure");
//         setData(data);
//         break;
//       case "Sci-Fi":
//         setDataMain(data?.data?.filter((anime) => anime.genres.some((genre) => genre.name === "Sci-Fi")));
//         setTitleMain("Anime Sci-Fi");
//         setData(data);
//         break;
//       case "Suspense":
//         setDataMain(data?.data?.filter((anime) => anime.genres.some((genre) => genre.name === "Suspense")));
//         setTitleMain("Anime Suspense");
//         setData(data);
//         break;
//       case "Comedy":
//         setDataMain(data?.data?.filter((anime) => anime.genres.some((genre) => genre.name === "Comedy")));
//         setTitleMain("Anime Comedy");
//         setData(data);
//         break;
//       case "Romance":
//         setDataMain(data?.data?.filter((anime) => anime.genres.some((genre) => genre.name === "Supernatural")));
//         setTitleMain("Anime Romance");
//         setData(data);
//         break;
//       case "Award Winning":
//         setDataMain(data?.data?.filter((anime) => anime.genres.some((genre) => genre.name === "Award Winning")));
//         setTitleMain("Anime Award Wining");
//         setData(data);
//         break;
