import React from "react";

const DetailAnimeTable = ({ dataAnime }) => {
  return (
    <table className="w-full font-medium ">
      <tr>
        <td>Studio</td>
        <td className="flex gap-1 items-center border-none">
          {dataAnime.studios.map((studio, index) => (
            <p key={index}>{studio.name}</p>
          ))}
        </td>
      </tr>
      <tr>
        <td>Genre</td>
        <td className="flex gap-1 items-center border-none">
          {dataAnime.genres.map((genre, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <p>|</p>}
              <p>{genre.name}</p>
            </React.Fragment>
          ))}
        </td>
      </tr>
      <tr>
        <td>Episode</td>
        <td>{dataAnime.episodes}</td>
      </tr>
      <tr>
        <td>Rating</td>
        <td>{dataAnime.rating}</td>
      </tr>
      <tr>
        <td>Sumber</td>
        <td>{dataAnime.source}</td>
      </tr>
      <tr>
        <td>Year & Season</td>
        <td>
          {dataAnime.year} | {dataAnime.season}
        </td>
      </tr>
    </table>
  );
};

export default DetailAnimeTable;
