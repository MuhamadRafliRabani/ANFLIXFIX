import React from "react";

const DetailAnimeTable = ({ Data }) => {
  return (
    <table className="w-[80%] font-medium text-sm md:text-base md:w-[80%]">
      <tbody>
        <tr>
          <td>Studio</td>
          <td className="flex gap-1 items-center border-none">
            {Data.studios &&
              Data?.studios.map((studio, index) => (
                <p key={index}>{studio.name}</p>
              ))}
          </td>
        </tr>
        <tr>
          <td>Genre</td>
          <td className="flex gap-1 items-center border-none">
            {Data.genres &&
              Data?.genres.map((genre, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && <p>|</p>}
                  <p>{genre.name}</p>
                </React.Fragment>
              ))}
          </td>
        </tr>
        <tr>
          <td>Episode</td>
          <td>{Data.episodes}</td>
        </tr>
        <tr>
          <td>Rating</td>
          <td>{Data.rating}</td>
        </tr>
        <tr>
          <td>Sumber</td>
          <td>{Data.source}</td>
        </tr>
        <tr>
          <td>Year & Season</td>
          <td>
            {Data.year} | {Data.season}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailAnimeTable;
