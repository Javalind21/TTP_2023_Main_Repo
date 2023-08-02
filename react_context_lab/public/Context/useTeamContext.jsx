import { useContext } from "react";
import TeamContext from "./TeamContext";

const useTeamContext = () => {
  return useContext(TeamContext);
};

export default useTeamContext;