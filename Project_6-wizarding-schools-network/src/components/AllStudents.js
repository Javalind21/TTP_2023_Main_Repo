
  import React from "react";
  import { useEffect, useState } from "react";
  import axios from "axios";
  
  export default function AllStudents() {
    const [Students, setStudents] = useState([]);
  
    useEffect(() => {
      try {
        async function fetchStudents() {
          const response = await axios.get("https://swapi.dev/api/people");
          console.log(response.data.results);
  
          setStudents(response.data.results);
        }
  
        fetchStudents();
      } catch (err) {
        console.error(err);
      }
    }, []);
  
    return (
      <ul>
        <h1>All Students</h1>
        {/* {Students.map((Student, index) => (
          <li key={Student.name}>
            <h2>
              <Link to={`/Student/${index + 1}`}>{Student.name}</Link>
            </h2>
            <p>
              <em>{Student.height} cm</em>
            </p>
            <p>
              <strong>{character.mass} kg</strong>
            </p>
          </li>
        ))} */}
      </ul>
    );
  }
  