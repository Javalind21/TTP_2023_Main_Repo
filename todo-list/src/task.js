import React, { useState, useEffect } from "react";
import axios from "axios";

function Task() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const response = await axios.get("https://dummyjson.com/todos");
      const tasks = await response;
      setTasks(tasks.data.todos);
    }
    getTasks();
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>Task {task.id}</h2>
          <div>
            <ul>
              <li className="todo">{task.todo}</li>
              <li>{task.completed.toString()}</li>
            </ul>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default Task;