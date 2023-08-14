import React, {useContext,createContext, useEffect, useState} from "react";
import axios from "axios";

export const schoolContext = createContext();


export function useSchoolContext(){
    return useContext(schoolContext);
  }
  
  export function schoolsProvider({ children }) {
    const [schools, setSchools] = useState([]);
  
    useEffect(() => {
      axios.get('/api/wizarding-schools') 
        .then(response => setSchools(response.data))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <schoolContext.Provider value={{ wizardingSchools, setWizardingSchools }}>
        {children}
      </schoolContext.Provider>
    );
  }