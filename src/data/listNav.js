import {
  BookOpen,
  HouseSimple,
  Newspaper,
  PersonSimple,
  TelevisionSimple,
} from "@phosphor-icons/react/dist/ssr";

export const listNav = [
  {
    name: "Home",
    url: "/",
    icon: <HouseSimple size={16} weight="fill" />,
  },
  {
    name: "Anime",
    url: "/anime/catalog/series",
    icon: <TelevisionSimple size={16} weight="fill" />,
  },
  {
    name: "Manga",
    url: "/manga/catalog/series",
    icon: <BookOpen size={16} weight="fill" />,
  },
  {
    name: "People",
    url: "/people/catalog/series",
    icon: <PersonSimple size={16} weight="fill" />,
  },
  {
    name: "News",
    url: "/",
    icon: <Newspaper size={16} weight="fill" />,
  },
];
