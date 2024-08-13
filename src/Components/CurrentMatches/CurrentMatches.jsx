import React, { useEffect, useState } from "react";
import { getCurrentMatches } from "../../CrickService";
import "./CurrentMatches.css"; // Custom CSS for styling

const CurrentMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCurrentMatches = async () => {
    try {
      const data = await getCurrentMatches();
      setMatches(data.data);
      setLoading(false); // Data has been fetched
      console.log(data);
    } catch (error) {
      console.error("Error fetching matches:", error);
      setLoading(false); // In case of error, stop loading
    }
  };

  useEffect(() => {
    fetchCurrentMatches();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="matches-container">
      <h1>Current Cricket Matches</h1>
      <div className="matches-grid">
        {matches &&
          matches.map((match) => (
            <div key={match.id} className="match-card">
              <h2>{match.name}</h2>
              <p>
                <strong>Type:</strong>{" "}
                {match.matchType ? match.matchType.toUpperCase() : "N/A"}
              </p>
              <p>
                <strong>Status:</strong> {match.status}
              </p>
              <p>
                <strong>Venue:</strong> {match.venue}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(match.dateTimeGMT).toLocaleString()}
              </p>
              <div className="teams-section">
                <strong>Teams:</strong>
                <ul className="team-list">
                  {match.teamInfo.map((team, index) => (
                    <li key={index} className="team-item">
                      <img
                        src={team.img}
                        alt={team.name}
                        className="team-img"
                      />
                      {team.name} ({team.shortname || team.name})
                    </li>
                  ))}
                </ul>
              </div>
              <div className="scores-section">
                <strong>Scores:</strong>
                <ul className="score-list">
                  {match.score.map((inning, index) => (
                    <li key={index} className="score-item">
                      {inning.inning}: {inning.r}/{inning.w} in {inning.o} overs
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CurrentMatches;
