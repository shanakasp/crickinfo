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
      <h1>Current Matches Are</h1>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            <h2>{match.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentMatches;
