import React from "react";
import Card from "./card";
import { FetchAnime } from "@/utility/Api";

const Relations = ({ relations, score, idAnime }) => {
  const anime = relations?.flatMap((relation) => relation.entry) || [];

  const { data } = FetchAnime(`/anime/${idAnime}/pictures`);

  return (
    <div>
      <h3 className="text-xl font-semibold text-white">Chronology</h3>
      <div className="">
        <Card
          idAnime={idAnime}
          image={data?.data[3]?.jpg.large_image_url}
          title={anime[0]?.name}
          year={anime[0]?.type}
          score={score}
          url={anime[0]?.url}
        />
      </div>
    </div>
  );
};

export default Relations;
