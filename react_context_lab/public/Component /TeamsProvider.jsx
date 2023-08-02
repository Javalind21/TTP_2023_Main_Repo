import React, { useState, useEffect } from "react";
import TeamContext from "./TeamContext";

const TeamsProvider = ({ children }) => {
  const [team, setTeam] = useState(null);
  const [allTeams, setAllTeams] = useState([]);

  // Rest of the code goes here...
  useEffect(() => {
    // Replace this with your actual API call
    const fetchTeams = async () => {
      const teams = ["Team 1", "Team 2", "Team 3"];
      setAllTeams(teams);
    };

    fetchTeams();
  }, []);


  return (
    <TeamContext.Provider value={{ team, setTeam, allTeams, setAllTeams }}>
      {children}
    </TeamContext.Provider>
  );
};

export default TeamsProvider;