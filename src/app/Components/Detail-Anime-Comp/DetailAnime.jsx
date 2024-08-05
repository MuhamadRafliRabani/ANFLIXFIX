import React from "react";

const DetailAnimeTable = ({ datas }) => {
  console.log(datas);

  return (
    <table className="w-[80%] font-medium text-sm md:text-base md:w-[80%]">
      <tbody>
        <tr>
          <td>Studio</td>
          <td className="flex gap-1 items-center border-none">
            {datas?.data?.studios &&
              datas?.data?.studios.map((studio, index) => (
                <p key={index}>{studio.name}</p>
              ))}
          </td>
        </tr>
        <tr>
          <td>Genre</td>
          <td className="flex gap-1 items-center border-none">
            {datas?.data.genres &&
              datas?.data?.genres.map((genre, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && <p>|</p>}
                  <p>{genre.name}</p>
                </React.Fragment>
              ))}
          </td>
        </tr>
        <tr>
          <td>Episode</td>
          <td>{datas?.data.episodes}</td>
        </tr>
        <tr>
          <td>Rating</td>
          <td>{datas?.data.rating}</td>
        </tr>
        <tr>
          <td>Sumber</td>
          <td>{datas?.data.source}</td>
        </tr>
        <tr>
          <td>Year & Season</td>
          <td>
            {datas?.data.year} | {datas?.data.season}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailAnimeTable;
