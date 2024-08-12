import React, { useEffect, useState } from "react";
import { getCurrentMatches } from "../CrickService";

const CurrentMatches = () => {
  const [matches, setMatches] = useState([]);

  const fetchCurrentMatches = async () => {
    try {
      const data = await getCurrentMatches();
      setMatches(data.data);
      console.log(data);
    } catch {}
  };

  useEffect(() => {
    fetchCurrentMatches();
  }, []);

  return (
    <div>
      <h1>Current Cricket Matches</h1>
      <ul>
        {matches &&
          matches.map((match) => (
            <li key={match.id}>
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
              <div>
                <strong>Teams:</strong>
                <ul>
                  {match.teamInfo.map((team, index) => (
                    <li key={index}>
                      <img
                        src={team.img}
                        alt={team.name}
                        style={{ width: "48px", marginRight: "10px" }}
                      />
                      {team.name} ({team.shortname || team.name})
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Scores:</strong>
                <ul>
                  {match.score.map((inning, index) => (
                    <li key={index}>
                      {inning.inning}: {inning.r}/{inning.w} in {inning.o} overs
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CurrentMatches;
