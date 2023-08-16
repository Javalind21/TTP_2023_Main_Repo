import React, { useState, useEffect } from "react";
import axios from "axios";

function Task() {
    const [tasks, setTasks] = useState([]);

    useEffect(() =>{
        async function getTasks(){
            const response = await axios.get("https://dummyjson.com/todos");
            const tasks = await response.json();
            setTasks(tasks.results);
        }
        getTasks();

    }, [])


  return (
    <ul>
      {tasks.map(({ task }) => (
       <div>
       <h2>Task</h2>
       <div>
        <ul>
            <li className="taskId">{task.id}</li>
            <li className="todo">{task.todo}</li>
            <li>{task.completed}</li>
            <li>{task.userId}</li>
        </ul>
       </div>
       </div>
      ))}
    </ul>
  );
    
}

export default Task;