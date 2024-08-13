import axios from "axios";
import React, { useState } from "react";
import "./SearchSeries.css"; // Optional, for custom styling

const SearchSeries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [seriesData, setSeriesData] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.cricapi.com/v1/series?apikey=f8cecb2c-b543-4878-af66-091ac53d69d3&offset=0&search=${searchTerm}`
      );
      setSeriesData(response.data.data); // Update seriesData with the response
    } catch (error) {
      console.error("Error fetching series data:", error);
    }
  };

  return (
    <div className="search-series-container">
      <h1>Search Cricket Series</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter series name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="series-results">
        {seriesData.length > 0 ? (
          seriesData.map((series) => (
            <div key={series.id} className="series-card">
              <h2>{series.name}</h2>
              <p>
                <strong>Start Date:</strong>{" "}
                {new Date(series.startDate).toLocaleDateString()}
              </p>
              <p>
                <strong>End Date:</strong> {series.endDate}
              </p>
              <p>
                <strong>Matches:</strong> {series.matches}
              </p>
              <p>
                <strong>ODI:</strong> {series.odi}, <strong>T20:</strong>{" "}
                {series.t20}, <strong>Test:</strong> {series.test}
              </p>
            </div>
          ))
        ) : (
          <p>No series found. Try searching with a different term.</p>
        )}
      </div>
    </div>
  );
};

export default SearchSeries;
