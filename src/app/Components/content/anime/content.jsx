import Characters from "../../ui/characters";
import Overview from "../../ui/overview";
import Relations from "../../ui/relations";
import Reviews from "../../ui/reviews";
import Staff from "../../ui/staff";

const Content = ({ anime, characters, staff }) => {
  return (
    <div>
      <Overview anime={anime} />
      <Relations
        relations={anime?.relations}
        image={anime?.trailer?.images.medium_image_url}
        score={anime?.score}
        idAnime={anime?.mal_id}
      />
      <Characters characters={characters} />
      <Staff staff={staff} />
      <Reviews />
    </div>
  );
};

export default Content;
