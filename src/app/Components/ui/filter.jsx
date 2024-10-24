const Filter = ({ filters, onChange }) => {
  const handleYearChange = (e) => {
    onChange({ year: e.target.value });
  };

  const handleSeasonChange = (e) => {
    onChange({ season: e.target.value });
  };

  return (
    <div className="rounded-lg bg-gray-800 p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {/* Filter by Year */}
        <select
          value={filters.year}
          onChange={handleYearChange}
          className="rounded-lg bg-gray-700 px-4 py-2 text-white"
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>

        {/* Filter by Season */}
        <select
          value={filters.season}
          onChange={handleSeasonChange}
          className="rounded-lg bg-gray-700 px-4 py-2 text-white"
        >
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
        </select>

        {/* Filter by Genres */}
        <div className="flex flex-col gap-2">
          <label className="text-white">Genres:</label>
          <div className="flex flex-wrap gap-2">
            {["Action", "Comedy", "Drama", "Adventure"].map((genre) => (
              <label key={genre} className="text-white">
                <input
                  type="checkbox"
                  value={genre}
                  onChange={(e) => {
                    const selectedGenres = filters.genres.includes(
                      e.target.value,
                    )
                      ? filters.genres.filter((g) => g !== e.target.value)
                      : [...filters.genres, e.target.value];
                    onChange({ genres: selectedGenres });
                  }}
                />
                {genre}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
