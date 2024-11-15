import Overview from "../../ui/overview";
import Relations from "../../ui/relations";

const Content = ({ anime }) => {
  return (
    <div>
      <Overview anime={anime} />
      <Relations
        relations={anime?.relations}
        image={anime?.trailer?.images.medium_image_url}
        score={anime?.score}
        idAnime={anime?.mal_id}
      />
    </div>
  );
};

export default Content;
