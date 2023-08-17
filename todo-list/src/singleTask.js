import React, { useState, useEffect } from "react";
import axios from "axios";

function SingleTask() {
  const [singleTasks, setSingleTasks] = useState({});

    useEffect(() => {
       async function getSingleTask() {
        const response = await axios.get(`https://dummyjson.com/todos`);
        const singleTask = await response;
        setSingleTasks(singleTask.data.todo);
       }
       getSingleTask();
 }, []);

  return (
    <ul>
      {singleTasks.map((task) => (
        <div key={task.id}>
          <h2>Task</h2>
          <div>
            <ul>
              <li className="taskId">{task.id}</li>
              <li className="todo">{task.todo}</li>
              <li>{task.completed.toString()}</li>
            </ul>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default SingleTask;